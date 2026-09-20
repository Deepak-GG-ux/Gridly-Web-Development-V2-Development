/**
 * Contact form.
 *
 * IMPORTANT: this site is a static deployment with no mail service attached,
 * so the form does NOT send anything. On submit it shows a clearly labelled
 * demo state and offers the composed enquiry for copying or opening in the
 * visitor's own mail client. Nothing here claims a message was delivered.
 *
 * To connect it for real on Netlify, see the notes in README.md — add
 * `netlify` and `name` attributes to the <form> element and a hidden
 * form-name input, then remove the demo branch in `handleSubmit`.
 */

import { ready } from '../core/app.js';
import { qs, qsa, getParam, toast } from '../core/utils.js';
import { site } from '../data/site.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Each rule returns an error string, or an empty string when the value is fine. */
const rules = {
  name: (value) => {
    if (!value.trim()) return 'Enter your name so we know who we are replying to.';
    if (value.trim().length < 2) return 'That name looks too short — please enter your full name.';
    if (value.length > 80) return 'Please keep the name under 80 characters.';
    return '';
  },
  email: (value) => {
    if (!value.trim()) return 'Enter an email address so we can reply.';
    if (!EMAIL_PATTERN.test(value.trim())) return 'That email address is missing an @ or a domain.';
    if (value.length > 120) return 'Please keep the email under 120 characters.';
    return '';
  },
  phone: (value) => {
    if (!value.trim()) return ''; // optional
    const digits = value.replace(/[^\d]/g, '');
    if (digits.length < 7 || digits.length > 15) return 'Enter a phone number with 7 to 15 digits, including the country code.';
    return '';
  },
  company: (value) => (value.length > 80 ? 'Please keep the company name under 80 characters.' : ''),
  subject: (value) => {
    if (!value.trim()) return 'Add a subject so we can route the enquiry.';
    if (value.trim().length < 4) return 'Give the subject a little more detail.';
    if (value.length > 120) return 'Please keep the subject under 120 characters.';
    return '';
  },
  message: (value) => {
    if (!value.trim()) return 'Describe the project so we can give a useful reply.';
    if (value.trim().length < 20) return 'Add a little more detail — at least 20 characters.';
    if (value.length > 1500) return 'Please keep the message under 1500 characters.';
    return '';
  }
};

function setFieldError(input, message) {
  const field = input.closest('.field');
  if (!field) return;

  const errorNode = qs('.field__error', field);
  field.classList.toggle('has-error', Boolean(message));
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (errorNode) errorNode.textContent = message;
}

function validateField(input) {
  const rule = rules[input.name];
  if (!rule) return true;
  const message = rule(input.value);
  setFieldError(input, message);
  return !message;
}

function initCounter(form) {
  const message = qs('[name="message"]', form);
  const counter = qs('[data-counter]', form);
  if (!message || !counter) return;

  const max = Number(message.getAttribute('maxlength')) || 1500;
  const update = () => {
    const used = message.value.length;
    counter.textContent = `${used} / ${max}`;
    counter.classList.toggle('is-over', used > max * 0.95);
  };

  message.addEventListener('input', update);
  update();
}

/** Prefills project type from links such as contact.html?service=ecommerce */
function applyPrefill(form) {
  const requested = getParam('service') || getParam('type');
  if (!requested) return;

  const select = qs('[name="projectType"]', form);
  if (!select) return;

  const match = qsa('option', select).find((option) => option.value === requested);
  if (match) select.value = match.value;
}

function composeEnquiry(data) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    `Project type: ${data.projectType || 'Not specified'}`,
    `Budget range: ${data.budget || 'Not specified'}`,
    `Subject: ${data.subject}`,
    '',
    'Message:',
    data.message
  ]
    .filter(Boolean)
    .join('\n');
}

function showSuccess(form, summary) {
  const panel = qs('[data-form-success]');
  if (!panel) return;

  const output = qs('[data-enquiry-output]', panel);
  if (output) output.textContent = summary;

  const mailto = qs('[data-mailto]', panel);
  if (mailto) {
    const subject = encodeURIComponent('Project enquiry via gridly.netlify.app');
    mailto.href = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(summary)}`;
  }

  const copy = qs('[data-copy-enquiry]', panel);
  if (copy) {
    copy.onclick = async () => {
      try {
        await navigator.clipboard.writeText(summary);
        toast('Enquiry copied to clipboard');
      } catch {
        toast('Copy failed — select the text manually');
      }
    };
  }

  form.hidden = true;
  panel.hidden = false;
  panel.setAttribute('tabindex', '-1');
  panel.focus();
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleSubmit(form) {
  return (event) => {
    event.preventDefault();

    const inputs = qsa('input[name], select[name], textarea[name]', form);
    const invalid = inputs.filter((input) => !validateField(input));

    const summaryBox = qs('[data-form-error]', form);
    if (invalid.length) {
      if (summaryBox) {
        summaryBox.hidden = false;
        summaryBox.textContent = `${invalid.length} ${invalid.length === 1 ? 'field needs' : 'fields need'} attention before this can be sent.`;
      }
      invalid[0].focus();
      return;
    }

    if (summaryBox) summaryBox.hidden = true;

    const button = qs('[type="submit"]', form);
    button?.classList.add('is-loading');
    button?.setAttribute('aria-busy', 'true');

    const data = Object.fromEntries(new FormData(form).entries());

    // Simulated processing delay so the loading state is visible. No request
    // is made and no message is sent — see the file header.
    setTimeout(() => {
      button?.classList.remove('is-loading');
      button?.removeAttribute('aria-busy');
      showSuccess(form, composeEnquiry(data));
    }, 700);
  };
}

function initReset() {
  const reset = qs('[data-form-reset]');
  const form = qs('[data-contact-form]');
  const panel = qs('[data-form-success]');
  if (!reset || !form || !panel) return;

  reset.addEventListener('click', () => {
    form.reset();
    qsa('.field', form).forEach((field) => field.classList.remove('has-error'));
    panel.hidden = true;
    form.hidden = false;
    qs('[name="name"]', form)?.focus();
  });
}

ready.then(() => {
  const form = qs('[data-contact-form]');
  if (!form) return;

  // Validate on blur, then live once a field has already been flagged.
  qsa('input[name], select[name], textarea[name]', form).forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.closest('.field')?.classList.contains('has-error')) validateField(input);
    });
  });

  initCounter(form);
  applyPrefill(form);
  initReset();
  form.addEventListener('submit', handleSubmit(form));
});

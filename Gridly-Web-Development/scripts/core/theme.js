/**
 * Theme control.
 *
 * The initial theme is applied by a tiny inline script in the document head
 * (see any page) so there is no flash of the wrong theme. This module only
 * handles the toggle and keeps the preference in sync.
 *
 * Order of precedence: saved preference → system preference → light.
 */

const STORAGE_KEY = 'gridly:theme';

export const getStoredTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // Private browsing or storage disabled.
  }
};

const store = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* Preference simply will not persist. Not worth failing over. */
  }
};

export const currentTheme = () =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0d12' : '#f1f2f4');
}

export function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  store(next);
  return next;
}

export function initTheme() {
  applyTheme(currentTheme());

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-theme-toggle]');
    if (button) toggleTheme();
  });

  // Follow the system if the visitor has never chosen explicitly.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!getStoredTheme()) applyTheme(event.matches ? 'dark' : 'light');
  });
}

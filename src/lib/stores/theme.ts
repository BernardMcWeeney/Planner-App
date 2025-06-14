import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

const { subscribe, set } = writable<Theme>('system');

// Helper function to apply the class to the <html> element
const applyThemeClass = (theme: Theme) => {
	if (!browser) return;

	const docEl = document.documentElement;

	if (theme === 'system') {
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		docEl.classList.toggle('dark', systemPrefersDark);
	} else {
		docEl.classList.toggle('dark', theme === 'dark');
	}
};

export const theme = {
	subscribe,
	// Initialize the store's state from localStorage
	init: () => {
		if (browser) {
			const storedTheme = localStorage.getItem('theme') as Theme | null;
			set(storedTheme || 'system');
		}
	},
	// Set a new theme, update localStorage, and apply the class
	set: (newTheme: Theme) => {
		if (browser) {
			if (newTheme === 'system') {
				localStorage.removeItem('theme');
			} else {
				localStorage.setItem('theme', newTheme);
			}
			set(newTheme);
			applyThemeClass(newTheme);
		}
	}
};
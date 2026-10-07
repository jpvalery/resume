import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://resume.jpvalery.me',
	// One static page: no client JS, CSS inlined to skip a render-blocking request
	output: 'static',
	build: { inlineStylesheets: 'always' },
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: { enabled: false },
});

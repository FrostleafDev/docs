// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jozelot Docs',
			logo: {
				src: './src/assets/favicon.png',
				replacesTitle: false,
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
			// credits: true,
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap',
					},
				},
			],
			social: [{ icon: 'external', label: 'Website', href: 'https://jozelot.de' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/derjozelot' }, { icon: 'seti:json', label: 'code', href: 'https://jd.jozelot.de' }, { icon: 'discord', label: 'Discord', href: 'https://jozelot.de/discord' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

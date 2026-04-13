// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

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
				Sidebar: './src/components/Sidebar.astro',
			},
			lastUpdated: true,
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
			plugins: [
				starlightSidebarTopics([
					{
						id: 'jmanhunt',
						label: 'JManhunt',
						link: '/jmanhunt',
						icon: 'seti:json',
						items: [
							{ label: 'Übersicht', slug: 'jmanhunt' },
							{
								label: 'Erste Schritte',
								items: [
									{ label: 'Installation', slug: 'jmanhunt/setup' },
									{ label: 'Konfiguration', slug: 'jmanhunt/setup' },
								],
							},
							{
								label: 'Guides',
								items: [
									{ label: 'Befehle', slug: 'jmanhunt/setup' },
									{ label: 'Berechtigungen', slug: 'jmanhunt/setup' },
								],
							},
						],
					},
				]),
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.jozelot.de',
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
				SocialIcons: './src/components/SocialIcons.astro',
			},
			lastUpdated: true,
			// credits: true,
			social: [
				// JManhunt Icons
				{ icon: 'github', label: 'jmanhunt:GitHub', href: 'https://github.com/frostleafdev/jmanhunt' },
				{ icon: 'seti:java', label: 'jmanhunt:Javadoc', href: 'https://jd.jozelot.de/jmanhunt-api' },

				{ icon: 'github', label: 'GitHub', href: 'https://github.com/derjozelot' },
				{ icon: 'seti:java', label: 'Javadoc', href: 'https://jd.jozelot.de' },
				{ icon: 'external', label: 'Website', href: 'https://jozelot.de' },
				{ icon: 'discord', label: 'Discord', href: 'https://jozelot.de/discord' },

			],
			plugins: [
				starlightSidebarTopics([
						{
							id: 'jmanhunt',
							label: 'JManhunt',
							link: '/jmanhunt',
							icon: 'seti:json',
							editUrl: 'https://github.com/frostleafdev/docs/edit/master/src/content/docs/',
							items: [
								{
									label: 'Administration',
									items: [
										{
											label: 'Installation',
											slug: 'jmanhunt/installation'
										},
										{
											label: 'Setup',
											slug: 'jmanhunt/setup'
										},
										{
											label: 'Reset',
											slug: 'jmanhunt/setup'
										},
										{
											label: 'Command',
											items: [
												{
													label: 'Management',
													slug: 'jmanhunt/setup'
												},
												{
													label: 'Runner and Hunter setup',
													slug: 'jmanhunt/setup'
												},
												{
													label: 'Spectators',
													slug: 'jmanhunt/setup'
												},
												{
													label: 'UI and Help',
													slug: 'jmanhunt/setup'
												},
											]
										},
									],
								},
								{
									label: 'Developement',
									items: [
										{ label: 'Getting started',
											items: [
												{
													label: 'Project setup',
													slug: 'jmanhunt/dev/getting-started/project-setup'
												}
											]
										},
									],
								},
							],
						},
					],
					{
						topics: {
							jmanhunt: [
								'/jmanhunt/admin',
								'/jmanhunt/dev'
							]
						}
					}
				),
			],
		}),
	],
});

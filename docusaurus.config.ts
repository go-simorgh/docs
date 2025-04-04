import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Simorgh",
	tagline: "A full-stack framework powered by Go & TypeScript",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://simorgh.dev",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "go-simorgh", // Usually your GitHub org/user name.
	projectName: "simorgh", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fa"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/go-simorgh/simorgh-docs/edit/main/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						// xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/simorgh/simorgh-docs/edit/main/blog/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Simorgh",
			logo: {
				alt: "Simorgh Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "simorghSidebar",
					position: "left",
					label: "Docs",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/go-simorgh/simorgh",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{ label: "DSL", to: "/docs/spec/dsl-syntax" },
						{ label: "Component System", to: "/docs/spec/components" },
						{ label: "Compiler", to: "/docs/spec/compiler" },
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/go-simorgh/simorgh",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "X",
							href: "https://x.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Simorgh.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
}

export default config

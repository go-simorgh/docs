import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	simorghSidebar: [
		{
			type: "category",
			label: "Getting Started",
			items: [
				"guide/introduction",
				"guide/getting-started",
				"guide/pages-and-components",
			],
		},
		{
			type: "category",
			label: "DSL Reference",
			items: [
				"spec/dsl-syntax",
				"spec/data-binding",
				"spec/events",
				"spec/forms",
				"spec/loops-conditionals",
				"spec/actions",
			],
		},
		{
			type: "category",
			label: "Architecture",
			items: [
				"spec/compiler",
				"spec/compiler-ast",
				"spec/layout-system",
				"spec/dev-server",
			],
		},
		{
			type: "category",
			label: "Components",
			items: [
				"components/button",
				"components/form",
				"components/modal",
				"components/table",
			],
		},
	],
}

export default sidebars

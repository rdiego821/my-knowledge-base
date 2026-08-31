// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Senior Engineering Knowledge Hub',
			defaultLocale: 'es',
			locales: {
				es: { label: 'Español', lang: 'es' },
				en: { label: 'English', lang: 'en' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			// Configuración automática basada en la estructura de carpetas
			sidebar: [
				{
					label: '01 - Java Core',
					items: [
					{
						label: 'Interfaz vs Clase Abstracta',
						// El slug omite el idioma (es/en) y la extensión (.mdx)
						slug: '01-java-core/oop/interface-vs-abstract-class',
					},
				],
				},
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';

const env = loadEnv('client', process.cwd(), 'VITE_');
/** @type {Record<string, string>} */
const defines = {};
for (const [key, value] of Object.entries(env)) {
  defines[`import.meta.env.${key}`] = JSON.stringify(value);
}

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    plugins: [tailwindcss()],
    define: defines,
  },
});


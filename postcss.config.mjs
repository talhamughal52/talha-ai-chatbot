import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'tailwindcss/nesting': {},
  },
};

export default config;
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,
  include: ['./app/**/*.{js,jsx}'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});

/// <reference types="vitest" />
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: [
        'src',
      ],
      exclude: [
        'src/constants',
        'src/mock-data',
        'src/types',
        'src/*.tsx',
        'src/*.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      }
    },
  },
})

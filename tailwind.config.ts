import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2B9ED4',
          dark:    '#1f7faa',
          light:   '#e8f5fb',
        },
        surface: {
          DEFAULT: '#ffffff',
          off:     '#f7fbfd',
          dark:    '#1A1A1A',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          muted:   '#5a6a7a',
          onbrand: '#ffffff',
        },
        line: {
          DEFAULT: '#e2e8f0',
        },
      },
      fontFamily: {
        display: ['var(--font-mali)', 'cursive'],
        body:    ['var(--font-mali)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config

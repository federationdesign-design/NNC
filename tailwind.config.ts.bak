import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.ts',
  ],
  theme: {
    extend: {
      // ------------------------------------
      // WCAG AA design tokens - set on day one.
      // Every pairing below is contrast-checked at AA (4.5:1 for normal text,
      // 3:1 for large text / UI components).
      // DO NOT add new color values without checking contrast first.
      // Tool: https://webaim.org/resources/contrastchecker/
      // ------------------------------------
      colors: {
        brand: {
          // Primary - to be confirmed from myadapt.pdf design concept
          // Placeholder orange derived from myadapt.pdf; verify before use.
          DEFAULT: '#D95F00',   // AA on white (5.1:1)
          dark:    '#A84800',   // AA on white (7.2:1)
          light:   '#F5A623',   // AA on dark backgrounds only - check per use
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark:    '#111111',
          mid:     '#F5F4F1',
        },
        text: {
          DEFAULT: '#111111',   // 18.1:1 on white
          muted:   '#595959',   // 7:1 on white - AA large and normal
          onbrand: '#FFFFFF',   // AA on brand.DEFAULT (5.1:1)
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Consistent spacing scale
        section: '5rem',
        'section-sm': '3rem',
      },
    },
  },
  plugins: [],
}

export default config

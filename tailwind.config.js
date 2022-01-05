const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    darkMode: true, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          emerald: colors.emerald,
          fuchsia: colors.fuchsia,
          black: colors.black,
          slate:colors.slate,
          gray:colors.gray,
          'th-background': 'var(--background)',
          'header-background':'var(--bg-header-background)',
          'th-background-secondary': 'var(--background-secondary)',
          'th-foreground': 'var(--foreground)',
          'th-primary-dark': 'var(--primary-dark)',
          'th-primary-medium': 'var(--primary-medium)',
          'th-primary-light': 'var(--primary-light)',
          'th-accent-dark': 'var(--accent-dark)',
          'th-accent-medium': 'var(--accent-medium)',
          'th-accent-light': 'var(--accent-light)',
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },    
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
module.exports = {
  purge: ['./pages/**/*.tsx'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      'gray-lightest': '#faf8f8',
      'gray-lighter': '#e6e4e4',
      'gray-light': '#d2d1d0',
      gray: '#c0bebe',
      'gray-dark': '#989696',
      'gray-darker': '#706f6f',
      'gray-darkest': '#4a4848',
      black: '#222020',

      'brand-light': '#fdd0cd',
      brand: '#d63447',
      'brand-dark': '#672226',

      'cta-light': '#d5f6db',
      cta: '#34d672',
      'cta-dark': '#26653a',

      'info-light': '#e3eff5',
      info: '#8bc0d7',
      'info-dark': '#455c66',

      'warning-light': '#ffeecc',
      warning: '#f9bf27',
      'warning-dark': '#765b1d',

      'success-light': '#e2f4d1',
      success: '#7ed046',
      'success-dark': '#406328',

      'danger-light': '#ffd2cd',
      danger: '#f73345',
      'danger-dark': '#762425',
    },
    extend: {
      fontFamily: {
        head: ['Oswald', 'sans-serif'],
        body: ['Red Hat Text', 'sans-serif'],
      },
      boxShadow: {
        'border-bottom-gray': '0 -2px 0 #e7e5e5 inset',
        'border-top-brand': '0 2px 0 #d63447 inset',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(2.5rem, 1fr))',
      },
      rotate: {
        '-3': '-3deg',
      },
      minHeight: {
        50: '13rem',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    textColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}

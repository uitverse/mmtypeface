module.exports = {
  purge: ['./pages/**/*.tsx'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      white: '#ffffff',
      'gray-lightest': '#f8f8f9',
      'gray-lighter': '#e5e5e5',
      'gray-light': '#d1d1d2',
      gray: '#bebebf',
      'gray-dark': '#979797',
      'gray-darker': '#6f6f70',
      'gray-darkest': '#484849',
      black: '#212121',

      'brand-light': '#d7d8eb',
      brand: '#5f6caf',
      'brand-dark': '#323654',

      'cta-light': '#eddcd5',
      cta: '#af7a5f',
      'cta-dark': '#553d31',

      'info-light': '#daf1fb',
      info: '#49c6ef',
      'info-dark': '#2d5e70',

      'warning-light': '#fdf0d2',
      warning: '#e6c54b',
      'warning-dark': '#6d5d2a',

      'success-light': '#d9f5d7',
      success: '#55d463',
      'success-dark': '#306433',

      'danger-light': '#ffd4d3',
      danger: '#e7485a',
      'danger-dark': '#6e292e',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

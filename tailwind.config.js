module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'green': '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
      },
      colors: {
        dark: '#1F2937',
        light: '#F3F4F6',
        green: '#10B981',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions', '> 1%', 'IE 11', 'not dead'],
      grid: true,
      flexbox: true
    },
  },
}

export default {
  input: 'src/main.js',
  output: [{
    file: 'dist/main-cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/main-esm.js',
    format: 'esm'
  }]
};

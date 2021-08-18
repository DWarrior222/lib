module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    ENV: true,
    RELEASE: true
  },
  env: {
    browser: true
  }
}

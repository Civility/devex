module.exports = {
  root: false,

  env: {
    node: true
  },

  // essential
  extends: ['plugin:vue/recommended', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attributes-order': 'off',
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never']
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}

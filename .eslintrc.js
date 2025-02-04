module.exports = {
  'extends': 'eslint:recommended',
  'parser': '@babel/eslint-parser',
  'env': {
    'es6': true,
    'node': true,
    'jest': true
  },

  // parserOptions: {
  //   'requireConfigFile': false,
  // },

  'plugins': [
    'react',
    'react-native',
    'import'
  ],

  'rules': {
    'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'comma-dangle': ['error', 'only-multiline'],
    'no-multi-spaces': 2,
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],
    'react/display-name': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [0, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'jsx-quotes': 1,
    'react/sort-prop-types': 1,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': [0, {'ignore': ['children']}],
    'react/react-in-jsx-scope': 1,
    'import/extensions': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 1,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2
  }
};

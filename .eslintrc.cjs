module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    "max-len": ["error", { "code": 100 }],
    "react/prop-types": [0],
    "space-infix-ops": ["error", { "int32Hint": false }]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};

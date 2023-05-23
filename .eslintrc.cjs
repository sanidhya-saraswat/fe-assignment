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
    "space-infix-ops": ["error", { "int32Hint": false }],
    "curly": ["error","all"]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};

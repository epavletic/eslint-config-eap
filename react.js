const path = require('path');

module.exports = {
  extends: [path.join(__dirname, './index.js'), 'prettier/react'],
  rules: {
    'react/no-multi-comp': 'off',
    'react/require-default-props': 'off',
  },
};

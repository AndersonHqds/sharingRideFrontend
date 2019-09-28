module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "no-confusing-arrow": ["error", {"allowParens": false}],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "template-curly-spacing": "off"
  }
};

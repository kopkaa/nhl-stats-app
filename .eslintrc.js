module.exports = {
  extends: ["plugin:vue/recommended", "airbnb-base"],
  plugins: ["vue"],
  rules: {
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    "brace-style": [2, "stroustrup"],
    "no-console": "warn",
    "no-tabs": "warn",
    semi: "error",
    "no-nested-ternary": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "space-before-function-paren": ["error", "always"],
  },
};

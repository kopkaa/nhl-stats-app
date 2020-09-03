module.exports = {

  "root": true,
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "esversion": 9,
            "destructuring": true,
            "generators": true,
            "superInFunctions": true,
            "experimentalObjectRestSpread": true,
        }
    },
  "rules": {
    "no-unused-vars": "error",
  }
}
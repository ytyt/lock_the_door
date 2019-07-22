module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  env: { browser: true, node: true, es6: true },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        singleQuote: true,
        semi: false
      }
    ]
  }
};

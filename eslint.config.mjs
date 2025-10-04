import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    settings: {
      react: { version: "detect" }
    },
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"], 
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    }
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "quotes": ["error", "double", { "avoidEscape": true }],
      "jsx-quotes": ["error", "prefer-double"],
      "indent": ["error", 2, {
        "ignoredNodes": ["ConditionalExpression"]
      }],
      "react/button-has-type": "error"
    }
  }
]);

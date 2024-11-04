import react from "eslint-plugin-react";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

import reactRecommended from "eslint-plugin-react/configs/recommended.js";
export default [
  reactRecommended,
  {
    ignores: [
      "node_modules/",
      "node_modules/*",
      ".node_modules/",
      ".node_modules/*",
      ".public/*",
      ".scripts/*",
    ],
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      //rules here
    },
  },
  {
    files: ["webpack.config.js", "jest.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
];

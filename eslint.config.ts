import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import react from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  {
    ignores: [
      "dist",
      "build",
      "coverage",
      "node_modules",
      ".react-router/**/*",
      "app/**/__generated__/**",
      "app/components/ui/**",
      "app/components/shadcn/**",
      "app/components/data-table/**",
      "app/components/editor/**",
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    settings: { react: { version: "detect" } },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,

  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-empty-pattern": "off",
      "react/no-unescaped-entities": "off",
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  eslintConfigPrettier,
])

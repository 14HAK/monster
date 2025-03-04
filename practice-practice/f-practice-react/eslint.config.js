import pluginJs from "@eslint/js";
import airbnbTypescript from "eslint-config-airbnb-typescript";
import pluginReact from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: ["node_modules/**", "dist/**"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      airbnbTypescript,
      "react-hooks": reactHooksPlugin, // Define the plugin object
    },
  },
  {
    rules: {
      ...airbnbTypescript.rules,

      "react-hooks/rules-of-hooks": "error", // Ensures hooks are used correctly
      "react-hooks/exhaustive-deps": "warn", // Warns on missing dependencies in useEffect
    },
  },
];

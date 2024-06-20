import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    rules: {
      // Enforce strict equality checks (=== and !==)
      'eqeqeq': 'error',
    
      // Disallow unused variables
      'no-unused-vars': 'error',
    
      // Prefer const over let when variable is not reassigned
      'prefer-const': ['error', { 'ignoreReadBeforeAssign': true }],
    
      // Enforce consistent indentation (adjust '2' to your preference)
      'indent': ['warn', 2],
    
      // Require semicolons at the end of statements
      'semi': ['error', 'always'],
    
      // Enforce single quotes for string literals
      'quotes': ['error', 'single'],
    
      // Require trailing commas in multiline object literals and arrays
      'comma-dangle': ['error', 'always-multiline'],
    
      // Disallow trailing whitespace at the end of lines
      'no-trailing-spaces': 'error',
    
      // Disallow multiple empty lines
      'no-multiple-empty-lines': ['error', { 'max': 2 }],
    
      // Require spacing after keywords like if, else, etc.
      // 'keyword-spacing': 'warn',
    
      // Require space before function parentheses
      // 'space-before-function-paren': ['error', 'always'],
    
      // Disallow unused expressions (e.g., `a + b;` without assignment)
      'no-unused-expressions': 'error',
    
      // Disallow unnecessary ternary expressions
      'no-unneeded-ternary': 'warn',
    
      // Enforce consistent return values in array callbacks
      'array-callback-return': 'warn',
    
      // Require constructor names to begin with a capital letter (for classes)
      'new-cap': ['error', { 'newIsCap': true }],
    
      // Disallow reassigning function parameters
      // 'no-param-reassign': 'error',
    
      // Enforce consistent linebreak styles (unix)
      // 'linebreak-style': ['error', 'unix'],
    
      // Enforce a maximum line length (adjust '80' to your preference)
      'max-len': ['warn', { 'code': 200 }],
    
      // Disallow console.log and other console methods in production
      // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    }
    
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
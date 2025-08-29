import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		ignores: ["node_modules", "dist", 'coverage'],
	},
	{
		files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
		rules: {
			"prefer-const": "warn",
			"no-constant-binary-expression": "error",
		},
	},
]);
















// import js from "@eslint/js"
// import globals, { node } from "globals"

// /** type {import('eslint').Linter.FlagConfig[]}*/ 
// export default [
// 	{
// 		plagins: {

// 		},
// 	},
// 	{
// 		ignores: ["node_modules", "dist"],
// 	},
// 	js.configs.recommended,

// 	{
// 		languageOptions: {
// 			globals: {
// 				...globals.node,
// 				...globals.browser
// 			}
// 		}
// 	},

// 	{
// 		files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
// 		rules: {
// 			"prefer-const": "warn",
// 			"no-constant-binary-expression": "error",
// 		}
// 	}
// ];


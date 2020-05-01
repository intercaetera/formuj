module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: ["eslint:recommended", "plugin:react-hooks/recommended", "plugin:react/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "import", "react-hooks"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "single"],
		semi: ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],

		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"react/prop-types": 1,
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};

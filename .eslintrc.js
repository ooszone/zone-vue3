module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true //启用es6语法和全局变量
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	globals: {
		$api:true,
		$monitor: true,
		$cache: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
}

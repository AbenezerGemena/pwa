module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,html,json,css}'
	],
	swDest: 'index.html',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
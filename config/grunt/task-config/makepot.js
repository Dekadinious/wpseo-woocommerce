// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
	plugin: {
		options: {
			domainPath: "<%= paths.languages %>",
			potFilename: "<%= pkg.plugin.textdomain %>.pot",
			potHeaders: {
				poedit: true,
				"report-msgid-bugs-to": "<%= pkg.pot.reportmsgidbugsto %>",
				"language-team": "<%= pkg.pot.languageteam %>",
				"last-translator": "<%= pkg.pot.lasttranslator %>",
			},
			type: "wp-plugin",
			exclude: [
				"<%= files.artifact %>",
				".wordpress-svn",
				"vendor/yoast/wordpress-seo",
			],
		},
	},
};


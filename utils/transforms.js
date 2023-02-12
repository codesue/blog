const htmlmin = require("html-minifier");

const shouldTransformHTML = (outputPath) =>
	outputPath &&
	outputPath.endsWith(".html") &&
	process.env.ELEVENTY_RUN_MODE === "build";

process.setMaxListeners(Infinity);
module.exports = {
	htmlmin(content, outputPath) {
		if (shouldTransformHTML(outputPath)) {
			return htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
		}
		return content;
	},
};

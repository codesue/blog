const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		const split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode(
		"image",
		async function imageShortcode(src, alt, css, widths, sizes) {
			const formats = ["webp", "auto"];
			const file = relativeToInputPath(this.page.inputPath, src);
			const metadata = await eleventyImage(file, {
				widths: widths || ["auto"],
				formats,
				outputDir: path.join(eleventyConfig.dir.output, "assets/images/"),
				urlPath: "/assets/images/",
			});

			// TODO loading=eager and fetchpriority=high
			const imageAttributes = {
				alt,
				class: css,
				sizes,
				loading: "lazy",
				decoding: "async",
			};
			return eleventyImage.generateHTML(metadata, imageAttributes);
		}
	);
};

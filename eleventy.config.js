const markdownItAnchor = require("markdown-it-anchor");

const EleventyRssPlugin = require("@11ty/eleventy-plugin-rss");
const EleventySyntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const EleventyBundlePlugin = require("@11ty/eleventy-plugin-bundle");
const EleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const filters = require("./utils/filters");
const transforms = require("./utils/transforms");

module.exports = (eleventyConfig) => {
  // Official and third-party plugins
  eleventyConfig.addPlugin(EleventyRssPlugin);
  eleventyConfig.addPlugin(EleventySyntaxHighlightPlugin, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(EleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyBundlePlugin);

  // Local plugins
  eleventyConfig.addPlugin(
    require("./utils/plugins/eleventy.config.drafts.js")
  );
  eleventyConfig.addPlugin(
    require("./utils/plugins/eleventy.config.images.js")
  );

  // Markdown customizations
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink({
        safariReaderFix: true,
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    });
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("postlist", "snippets/postlist.njk");
  eleventyConfig.addLayoutAlias("base", "snippets/base.njk");
  eleventyConfig.addLayoutAlias("home", "home.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  // Watch targets
  eleventyConfig.addWatchTarget(".src/assets/");

  // Pass-through files
  eleventyConfig.addPassthroughCopy({ "./src/assets/favicons/": "/" });
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/styles/");
  // NOTE: If the passthrough copy gets heavy and cumbersome, emulate the file
  // copy on the dev server by uncommenting the following line
  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  // Base Config
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "layouts",
      data: "globals",
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
  };
};

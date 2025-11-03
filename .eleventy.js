
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Add shortcode
  eleventyConfig.addShortcode("reusableNote", function() {
    return `<p>🧋 This site is powered by Eleventy.</p>`;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
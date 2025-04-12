module.exports = function (eleventyConfig) {
    // Use Nunjucks for templates
    eleventyConfig.setTemplateFormats([
        "md",
        "njk"
    ]);

    // Use Nunjucks for HTML templates
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true
    });

    // Enable Nunjucks for markdown
    eleventyConfig.setFrontMatterParsingOptions({
        engines: {
            njk: true
        }
    });

    // Create a collection for recipes
    eleventyConfig.addCollection("recipes", function (collectionApi) {
        return collectionApi.getFilteredByGlob("recipes/*.json");
    });

    // Copy assets directly to output
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["md", "njk", "html"]
    };
}; 

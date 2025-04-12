import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin); // https://www.11ty.dev/docs/plugins/html-base/

    // Use Nunjucks for templates
    eleventyConfig.setTemplateFormats([
        "md",
        "njk",
    ]);

    eleventyConfig.addFilter('stringify', (data) => {
        return JSON.stringify(data, null, "\t")
    })

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

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface SinglePageCrawlerSettingsInput {
    scraper?: Scout.SinglePageCrawlerSettingsInputScraper;
    text_extractor?: Scout.SinglePageCrawlerSettingsInputTextExtractor;
    /** Comma-separated list of URL patterns to include. Only URLs matching these patterns will be crawled. */
    allow?: string;
    /** Comma-separated list of URL patterns to exclude. URLs matching these patterns will be skipped. */
    deny?: string;
    /** Comma-separated list of regex patterns to exclude. URLs matching any of these patterns will be skipped. For example: '/private/, login\.html$' will skip URLs containing '/private/' and ending with 'login.html' */
    exclude_patterns?: string;
    /** Comma-separated list of html tags to strip from the content. */
    strip?: string;
    /** Removes query parameters, fragments, or trailing slashes, to simplify or standardize urls. */
    strip_urls?: boolean;
    /** Comma-separated list of domains to include. Only URLs from these domains will be crawled. Defaults to the domain of the startingURL. */
    allowed_domains?: string;
    /** Fixed to 1 for single page crawls */
    max_depth?: number;
    /** Fixed to 1 for single page crawls */
    max_page_count?: number;
}

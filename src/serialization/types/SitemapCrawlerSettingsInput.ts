/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SitemapCrawlerSettingsInputScraper } from "./SitemapCrawlerSettingsInputScraper";
import { SitemapCrawlerSettingsInputTextExtractor } from "./SitemapCrawlerSettingsInputTextExtractor";

export const SitemapCrawlerSettingsInput: core.serialization.ObjectSchema<
    serializers.SitemapCrawlerSettingsInput.Raw,
    Scout.SitemapCrawlerSettingsInput
> = core.serialization.object({
    scraper: SitemapCrawlerSettingsInputScraper.optional(),
    text_extractor: SitemapCrawlerSettingsInputTextExtractor.optional(),
    allow: core.serialization.string().optional(),
    deny: core.serialization.string().optional(),
    exclude_patterns: core.serialization.string().optional(),
    strip: core.serialization.string().optional(),
    strip_urls: core.serialization.boolean().optional(),
    allowed_domains: core.serialization.string().optional(),
    max_depth: core.serialization.number().optional(),
    max_page_count: core.serialization.number().optional(),
    exclude_before_lastmod_date: core.serialization.string().optional(),
});

export declare namespace SitemapCrawlerSettingsInput {
    interface Raw {
        scraper?: SitemapCrawlerSettingsInputScraper.Raw | null;
        text_extractor?: SitemapCrawlerSettingsInputTextExtractor.Raw | null;
        allow?: string | null;
        deny?: string | null;
        exclude_patterns?: string | null;
        strip?: string | null;
        strip_urls?: boolean | null;
        allowed_domains?: string | null;
        max_depth?: number | null;
        max_page_count?: number | null;
        exclude_before_lastmod_date?: string | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { MultiPageCrawlerSettingsInputScraper } from "./MultiPageCrawlerSettingsInputScraper";
import { MultiPageCrawlerSettingsInputTextExtractor } from "./MultiPageCrawlerSettingsInputTextExtractor";

export const MultiPageCrawlerSettingsInput: core.serialization.ObjectSchema<
    serializers.MultiPageCrawlerSettingsInput.Raw,
    Scout.MultiPageCrawlerSettingsInput
> = core.serialization.object({
    scraper: MultiPageCrawlerSettingsInputScraper.optional(),
    text_extractor: MultiPageCrawlerSettingsInputTextExtractor.optional(),
    allow: core.serialization.string().optional(),
    deny: core.serialization.string().optional(),
    strip: core.serialization.string().optional(),
    strip_urls: core.serialization.boolean().optional(),
    allowed_domains: core.serialization.string().optional(),
    max_depth: core.serialization.number().optional(),
    max_page_count: core.serialization.number().optional(),
});

export declare namespace MultiPageCrawlerSettingsInput {
    interface Raw {
        scraper?: MultiPageCrawlerSettingsInputScraper.Raw | null;
        text_extractor?: MultiPageCrawlerSettingsInputTextExtractor.Raw | null;
        allow?: string | null;
        deny?: string | null;
        strip?: string | null;
        strip_urls?: boolean | null;
        allowed_domains?: string | null;
        max_depth?: number | null;
        max_page_count?: number | null;
    }
}

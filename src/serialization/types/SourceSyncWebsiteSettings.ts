/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SourceSyncWebsiteSettingsSplitter } from "./SourceSyncWebsiteSettingsSplitter";
import { TextExtractor } from "./TextExtractor";

export const SourceSyncWebsiteSettings: core.serialization.ObjectSchema<
    serializers.SourceSyncWebsiteSettings.Raw,
    Scout.SourceSyncWebsiteSettings
> = core.serialization.object({
    selectors: core.serialization.list(core.serialization.string()).optional(),
    exclude_selectors: core.serialization.list(core.serialization.string()).optional(),
    strip: core.serialization.list(core.serialization.string()).optional(),
    strip_urls: core.serialization.boolean().optional(),
    allowed_domains: core.serialization.list(core.serialization.string()).optional(),
    deny: core.serialization.list(core.serialization.string()).optional(),
    job_id: core.serialization.string().optional(),
    exclude_before_lastmod_date: core.serialization.string().optional(),
    splitter: SourceSyncWebsiteSettingsSplitter.optional(),
    wait_for_load_state: core.serialization.string().optional(),
    scraper: core.serialization.string().optional(),
    text_extractor: TextExtractor.optional(),
    text_extractor_config: core.serialization
        .record(core.serialization.string(), core.serialization.unknown())
        .optional(),
    max_depth: core.serialization.number().optional(),
    max_page_count: core.serialization.number().optional(),
    allow: core.serialization.list(core.serialization.string()).optional(),
    exclude_patterns: core.serialization.list(core.serialization.string()).optional(),
    sitemap_urls: core.serialization.list(core.serialization.string()).optional(),
    start_urls: core.serialization.list(core.serialization.string()).optional(),
    source_archetype_id: core.serialization.stringLiteral("com.scoutos.website"),
});

export declare namespace SourceSyncWebsiteSettings {
    export interface Raw {
        selectors?: string[] | null;
        exclude_selectors?: string[] | null;
        strip?: string[] | null;
        strip_urls?: boolean | null;
        allowed_domains?: string[] | null;
        deny?: string[] | null;
        job_id?: string | null;
        exclude_before_lastmod_date?: string | null;
        splitter?: SourceSyncWebsiteSettingsSplitter.Raw | null;
        wait_for_load_state?: string | null;
        scraper?: string | null;
        text_extractor?: TextExtractor.Raw | null;
        text_extractor_config?: Record<string, unknown> | null;
        max_depth?: number | null;
        max_page_count?: number | null;
        allow?: string[] | null;
        exclude_patterns?: string[] | null;
        sitemap_urls?: string[] | null;
        start_urls?: string[] | null;
        source_archetype_id: "com.scoutos.website";
    }
}

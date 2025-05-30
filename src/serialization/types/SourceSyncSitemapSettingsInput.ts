/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SitemapCrawlerSettingsInput } from "./SitemapCrawlerSettingsInput";

export const SourceSyncSitemapSettingsInput: core.serialization.ObjectSchema<
    serializers.SourceSyncSitemapSettingsInput.Raw,
    Scout.SourceSyncSitemapSettingsInput
> = core.serialization.object({
    source_archetype_id: core.serialization.stringLiteral("com.scoutos.sitemap"),
    sitemap_url: core.serialization.string(),
    crawler_settings: SitemapCrawlerSettingsInput.optional(),
});

export declare namespace SourceSyncSitemapSettingsInput {
    export interface Raw {
        source_archetype_id: "com.scoutos.sitemap";
        sitemap_url: string;
        crawler_settings?: SitemapCrawlerSettingsInput.Raw | null;
    }
}

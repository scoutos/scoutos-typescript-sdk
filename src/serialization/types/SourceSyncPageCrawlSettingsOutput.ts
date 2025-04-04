/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SinglePageCrawlerSettingsOutput } from "./SinglePageCrawlerSettingsOutput";

export const SourceSyncPageCrawlSettingsOutput: core.serialization.ObjectSchema<
    serializers.SourceSyncPageCrawlSettingsOutput.Raw,
    Scout.SourceSyncPageCrawlSettingsOutput
> = core.serialization.object({
    source_archetype_id: core.serialization.stringLiteral("com.scoutos.page_crawl"),
    start_urls: core.serialization.string(),
    crawler_settings: SinglePageCrawlerSettingsOutput.optional(),
});

export declare namespace SourceSyncPageCrawlSettingsOutput {
    export interface Raw {
        source_archetype_id: "com.scoutos.page_crawl";
        start_urls: string;
        crawler_settings?: SinglePageCrawlerSettingsOutput.Raw | null;
    }
}

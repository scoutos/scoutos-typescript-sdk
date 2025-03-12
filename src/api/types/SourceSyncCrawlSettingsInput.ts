/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface SourceSyncCrawlSettingsInput {
    source_archetype_id: "com.scoutos.crawl";
    /** The starting URL for the crawl process. */
    start_urls: string;
    crawler_settings?: Scout.MultiPageCrawlerSettingsInput;
}

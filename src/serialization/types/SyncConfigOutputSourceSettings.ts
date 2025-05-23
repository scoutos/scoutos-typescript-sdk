/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SourceSyncNotionSettings } from "./SourceSyncNotionSettings";
import { SourceSyncCrawlSettingsOutput } from "./SourceSyncCrawlSettingsOutput";
import { SourceSyncPageCrawlSettingsOutput } from "./SourceSyncPageCrawlSettingsOutput";
import { SourceSyncSitemapSettingsOutput } from "./SourceSyncSitemapSettingsOutput";
import { SourceSyncWebsiteSettings } from "./SourceSyncWebsiteSettings";

export const SyncConfigOutputSourceSettings: core.serialization.Schema<
    serializers.SyncConfigOutputSourceSettings.Raw,
    Scout.SyncConfigOutputSourceSettings
> = core.serialization.undiscriminatedUnion([
    SourceSyncNotionSettings,
    SourceSyncCrawlSettingsOutput,
    SourceSyncPageCrawlSettingsOutput,
    SourceSyncSitemapSettingsOutput,
    SourceSyncWebsiteSettings,
]);

export declare namespace SyncConfigOutputSourceSettings {
    export type Raw =
        | SourceSyncNotionSettings.Raw
        | SourceSyncCrawlSettingsOutput.Raw
        | SourceSyncPageCrawlSettingsOutput.Raw
        | SourceSyncSitemapSettingsOutput.Raw
        | SourceSyncWebsiteSettings.Raw;
}

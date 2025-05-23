/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { MarkdownSplitterConfig } from "./MarkdownSplitterConfig";
import { RecursiveSplitterConfig } from "./RecursiveSplitterConfig";
import { SentenceSplitterConfig } from "./SentenceSplitterConfig";
import { ParagraphSplitterConfig } from "./ParagraphSplitterConfig";
import { MarkDownWithContext } from "./MarkDownWithContext";

export const SourceSyncWebsiteSettingsSplitter: core.serialization.Schema<
    serializers.SourceSyncWebsiteSettingsSplitter.Raw,
    Scout.SourceSyncWebsiteSettingsSplitter
> = core.serialization.undiscriminatedUnion([
    MarkdownSplitterConfig,
    RecursiveSplitterConfig,
    SentenceSplitterConfig,
    ParagraphSplitterConfig,
    MarkDownWithContext,
]);

export declare namespace SourceSyncWebsiteSettingsSplitter {
    export type Raw =
        | MarkdownSplitterConfig.Raw
        | RecursiveSplitterConfig.Raw
        | SentenceSplitterConfig.Raw
        | ParagraphSplitterConfig.Raw
        | MarkDownWithContext.Raw;
}

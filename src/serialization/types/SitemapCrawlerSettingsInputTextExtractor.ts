/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Custom } from "./Custom";
import { Readability } from "./Readability";
import { TrafilaturaInput } from "./TrafilaturaInput";

export const SitemapCrawlerSettingsInputTextExtractor: core.serialization.Schema<
    serializers.SitemapCrawlerSettingsInputTextExtractor.Raw,
    Scout.SitemapCrawlerSettingsInputTextExtractor
> = core.serialization.undiscriminatedUnion([Custom, Readability, TrafilaturaInput]);

export declare namespace SitemapCrawlerSettingsInputTextExtractor {
    export type Raw = Custom.Raw | Readability.Raw | TrafilaturaInput.Raw;
}

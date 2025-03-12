/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Custom } from "./Custom";
import { Readability } from "./Readability";
import { TrafilaturaOutput } from "./TrafilaturaOutput";

export const SinglePageCrawlerSettingsOutputTextExtractor: core.serialization.Schema<
    serializers.SinglePageCrawlerSettingsOutputTextExtractor.Raw,
    Scout.SinglePageCrawlerSettingsOutputTextExtractor
> = core.serialization.undiscriminatedUnion([Custom, Readability, TrafilaturaOutput]);

export declare namespace SinglePageCrawlerSettingsOutputTextExtractor {
    type Raw = Custom.Raw | Readability.Raw | TrafilaturaOutput.Raw;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Http } from "./Http";
import { Playwright } from "./Playwright";

export const SinglePageCrawlerSettingsInputScraper: core.serialization.Schema<
    serializers.SinglePageCrawlerSettingsInputScraper.Raw,
    Scout.SinglePageCrawlerSettingsInputScraper
> = core.serialization.undiscriminatedUnion([Http, Playwright]);

export declare namespace SinglePageCrawlerSettingsInputScraper {
    export type Raw = Http.Raw | Playwright.Raw;
}

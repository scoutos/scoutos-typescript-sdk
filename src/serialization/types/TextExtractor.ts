/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const TextExtractor: core.serialization.Schema<serializers.TextExtractor.Raw, Scout.TextExtractor> =
    core.serialization.enum_(["readability", "trafilatura", "custom"]);

export declare namespace TextExtractor {
    type Raw = "readability" | "trafilatura" | "custom";
}

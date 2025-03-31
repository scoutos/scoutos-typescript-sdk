/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const RecursiveSplitterConfig: core.serialization.ObjectSchema<
    serializers.RecursiveSplitterConfig.Raw,
    Scout.RecursiveSplitterConfig
> = core.serialization.object({
    type: core.serialization.stringLiteral("recursive"),
    chunk_size: core.serialization.number().optional(),
    chunk_overlap: core.serialization.number().optional(),
});

export declare namespace RecursiveSplitterConfig {
    export interface Raw {
        type: "recursive";
        chunk_size?: number | null;
        chunk_overlap?: number | null;
    }
}

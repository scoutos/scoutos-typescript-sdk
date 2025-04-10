/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockRunCompletedEnvironment: core.serialization.Schema<
    serializers.BlockRunCompletedEnvironment.Raw,
    Scout.BlockRunCompletedEnvironment
> = core.serialization.enum_(["development", "preview", "production", "test"]);

export declare namespace BlockRunCompletedEnvironment {
    export type Raw = "development" | "preview" | "production" | "test";
}

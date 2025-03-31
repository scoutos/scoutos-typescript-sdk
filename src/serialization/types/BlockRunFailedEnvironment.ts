/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockRunFailedEnvironment: core.serialization.Schema<
    serializers.BlockRunFailedEnvironment.Raw,
    Scout.BlockRunFailedEnvironment
> = core.serialization.enum_(["development", "preview", "production", "test"]);

export declare namespace BlockRunFailedEnvironment {
    export type Raw = "development" | "preview" | "production" | "test";
}

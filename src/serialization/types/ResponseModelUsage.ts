/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Usage } from "./Usage";

export const ResponseModelUsage: core.serialization.ObjectSchema<
    serializers.ResponseModelUsage.Raw,
    Scout.ResponseModelUsage
> = core.serialization.object({
    data: Usage,
});

export declare namespace ResponseModelUsage {
    interface Raw {
        data: Usage.Raw;
    }
}
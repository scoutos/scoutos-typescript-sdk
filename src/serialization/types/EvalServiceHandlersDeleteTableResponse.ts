/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const EvalServiceHandlersDeleteTableResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersDeleteTableResponse.Raw,
    Scout.EvalServiceHandlersDeleteTableResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace EvalServiceHandlersDeleteTableResponse {
    interface Raw {
        detail: string;
    }
}
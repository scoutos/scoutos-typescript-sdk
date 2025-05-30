/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const SrcHandlersDeleteWorkflowResponse: core.serialization.ObjectSchema<
    serializers.SrcHandlersDeleteWorkflowResponse.Raw,
    Scout.SrcHandlersDeleteWorkflowResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace SrcHandlersDeleteWorkflowResponse {
    export interface Raw {
        detail: string;
    }
}

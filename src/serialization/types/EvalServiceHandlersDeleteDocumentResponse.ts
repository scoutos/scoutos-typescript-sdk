/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const EvalServiceHandlersDeleteDocumentResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersDeleteDocumentResponse.Raw,
    Scout.EvalServiceHandlersDeleteDocumentResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace EvalServiceHandlersDeleteDocumentResponse {
    interface Raw {
        detail: string;
    }
}

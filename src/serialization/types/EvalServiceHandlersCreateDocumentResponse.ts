/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { EvalServiceHandlersCreateDocumentResponseData } from "./EvalServiceHandlersCreateDocumentResponseData";

export const EvalServiceHandlersCreateDocumentResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersCreateDocumentResponse.Raw,
    Scout.EvalServiceHandlersCreateDocumentResponse
> = core.serialization.object({
    data: EvalServiceHandlersCreateDocumentResponseData.optional(),
});

export declare namespace EvalServiceHandlersCreateDocumentResponse {
    interface Raw {
        data?: EvalServiceHandlersCreateDocumentResponseData.Raw | null;
    }
}
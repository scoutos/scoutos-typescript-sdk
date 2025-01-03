/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Document } from "./Document";

export const EvalServiceHandlersUpdateDocumentResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersUpdateDocumentResponse.Raw,
    Scout.EvalServiceHandlersUpdateDocumentResponse
> = core.serialization.object({
    data: Document.optional(),
});

export declare namespace EvalServiceHandlersUpdateDocumentResponse {
    interface Raw {
        data?: Document.Raw | null;
    }
}

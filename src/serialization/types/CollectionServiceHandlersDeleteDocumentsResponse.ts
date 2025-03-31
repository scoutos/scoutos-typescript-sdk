/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const CollectionServiceHandlersDeleteDocumentsResponse: core.serialization.ObjectSchema<
    serializers.CollectionServiceHandlersDeleteDocumentsResponse.Raw,
    Scout.CollectionServiceHandlersDeleteDocumentsResponse
> = core.serialization.object({
    detail: core.serialization.string(),
    status_code: core.serialization.number(),
});

export declare namespace CollectionServiceHandlersDeleteDocumentsResponse {
    export interface Raw {
        detail: string;
        status_code: number;
    }
}

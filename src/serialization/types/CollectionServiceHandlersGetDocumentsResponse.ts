/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Document } from "./Document";

export const CollectionServiceHandlersGetDocumentsResponse: core.serialization.ObjectSchema<
    serializers.CollectionServiceHandlersGetDocumentsResponse.Raw,
    Scout.CollectionServiceHandlersGetDocumentsResponse
> = core.serialization.object({
    data: core.serialization.list(Document).optional(),
    next_cursor: core.serialization.string().optional(),
    has_more: core.serialization.boolean().optional(),
    total_count: core.serialization.number().optional(),
});

export declare namespace CollectionServiceHandlersGetDocumentsResponse {
    export interface Raw {
        data?: Document.Raw[] | null;
        next_cursor?: string | null;
        has_more?: boolean | null;
        total_count?: number | null;
    }
}

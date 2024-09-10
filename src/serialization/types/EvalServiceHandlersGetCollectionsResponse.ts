/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Collection } from "./Collection";

export const EvalServiceHandlersGetCollectionsResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersGetCollectionsResponse.Raw,
    Scout.EvalServiceHandlersGetCollectionsResponse
> = core.serialization.object({
    data: core.serialization.list(Collection).optional(),
});

export declare namespace EvalServiceHandlersGetCollectionsResponse {
    interface Raw {
        data?: Collection.Raw[] | null;
    }
}
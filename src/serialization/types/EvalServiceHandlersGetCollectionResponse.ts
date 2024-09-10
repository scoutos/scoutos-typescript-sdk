/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Collection } from "./Collection";

export const EvalServiceHandlersGetCollectionResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersGetCollectionResponse.Raw,
    Scout.EvalServiceHandlersGetCollectionResponse
> = core.serialization.object({
    data: Collection.optional(),
});

export declare namespace EvalServiceHandlersGetCollectionResponse {
    interface Raw {
        data?: Collection.Raw | null;
    }
}
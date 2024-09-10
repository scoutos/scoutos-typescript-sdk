/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Collection } from "./Collection";

export const EvalServiceHandlersUpdateCollectionResponse: core.serialization.ObjectSchema<
    serializers.EvalServiceHandlersUpdateCollectionResponse.Raw,
    Scout.EvalServiceHandlersUpdateCollectionResponse
> = core.serialization.object({
    data: Collection.optional(),
});

export declare namespace EvalServiceHandlersUpdateCollectionResponse {
    interface Raw {
        data?: Collection.Raw | null;
    }
}

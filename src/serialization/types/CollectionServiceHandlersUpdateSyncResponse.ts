/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Sync } from "./Sync";

export const CollectionServiceHandlersUpdateSyncResponse: core.serialization.ObjectSchema<
    serializers.CollectionServiceHandlersUpdateSyncResponse.Raw,
    Scout.CollectionServiceHandlersUpdateSyncResponse
> = core.serialization.object({
    data: Sync.optional(),
});

export declare namespace CollectionServiceHandlersUpdateSyncResponse {
    export interface Raw {
        data?: Sync.Raw | null;
    }
}

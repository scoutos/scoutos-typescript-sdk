/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { App } from "./App";

export const AppsServiceHandlersUpdateAppResponse: core.serialization.ObjectSchema<
    serializers.AppsServiceHandlersUpdateAppResponse.Raw,
    Scout.AppsServiceHandlersUpdateAppResponse
> = core.serialization.object({
    data: App.optional(),
});

export declare namespace AppsServiceHandlersUpdateAppResponse {
    interface Raw {
        data?: App.Raw | null;
    }
}
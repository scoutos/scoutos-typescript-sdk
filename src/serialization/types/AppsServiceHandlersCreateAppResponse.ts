/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { App } from "./App";

export const AppsServiceHandlersCreateAppResponse: core.serialization.ObjectSchema<
    serializers.AppsServiceHandlersCreateAppResponse.Raw,
    Scout.AppsServiceHandlersCreateAppResponse
> = core.serialization.object({
    data: App.optional(),
});

export declare namespace AppsServiceHandlersCreateAppResponse {
    interface Raw {
        data?: App.Raw | null;
    }
}

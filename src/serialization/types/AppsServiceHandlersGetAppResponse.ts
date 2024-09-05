/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { App } from "./App";

export const AppsServiceHandlersGetAppResponse: core.serialization.ObjectSchema<
    serializers.AppsServiceHandlersGetAppResponse.Raw,
    Scout.AppsServiceHandlersGetAppResponse
> = core.serialization.object({
    data: App,
});

export declare namespace AppsServiceHandlersGetAppResponse {
    interface Raw {
        data: App.Raw;
    }
}

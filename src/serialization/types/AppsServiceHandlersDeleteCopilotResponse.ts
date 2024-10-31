/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const AppsServiceHandlersDeleteCopilotResponse: core.serialization.ObjectSchema<
    serializers.AppsServiceHandlersDeleteCopilotResponse.Raw,
    Scout.AppsServiceHandlersDeleteCopilotResponse
> = core.serialization.object({
    detail: core.serialization.string(),
});

export declare namespace AppsServiceHandlersDeleteCopilotResponse {
    interface Raw {
        detail: string;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Copilot } from "./Copilot";

export const AppsServiceHandlersCreateCopilotResponse: core.serialization.ObjectSchema<
    serializers.AppsServiceHandlersCreateCopilotResponse.Raw,
    Scout.AppsServiceHandlersCreateCopilotResponse
> = core.serialization.object({
    data: Copilot.optional(),
});

export declare namespace AppsServiceHandlersCreateCopilotResponse {
    interface Raw {
        data?: Copilot.Raw | null;
    }
}
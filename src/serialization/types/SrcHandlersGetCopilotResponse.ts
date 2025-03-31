/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Copilot } from "./Copilot";

export const SrcHandlersGetCopilotResponse: core.serialization.ObjectSchema<
    serializers.SrcHandlersGetCopilotResponse.Raw,
    Scout.SrcHandlersGetCopilotResponse
> = core.serialization.object({
    data: Copilot,
});

export declare namespace SrcHandlersGetCopilotResponse {
    export interface Raw {
        data: Copilot.Raw;
    }
}

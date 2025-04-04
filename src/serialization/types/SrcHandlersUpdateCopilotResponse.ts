/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Copilot } from "./Copilot";

export const SrcHandlersUpdateCopilotResponse: core.serialization.ObjectSchema<
    serializers.SrcHandlersUpdateCopilotResponse.Raw,
    Scout.SrcHandlersUpdateCopilotResponse
> = core.serialization.object({
    data: Copilot.optional(),
});

export declare namespace SrcHandlersUpdateCopilotResponse {
    export interface Raw {
        data?: Copilot.Raw | null;
    }
}

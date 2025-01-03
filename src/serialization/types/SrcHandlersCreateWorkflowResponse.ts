/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Workflow } from "./Workflow";

export const SrcHandlersCreateWorkflowResponse: core.serialization.ObjectSchema<
    serializers.SrcHandlersCreateWorkflowResponse.Raw,
    Scout.SrcHandlersCreateWorkflowResponse
> = core.serialization.object({
    data: Workflow.optional(),
});

export declare namespace SrcHandlersCreateWorkflowResponse {
    interface Raw {
        data?: Workflow.Raw | null;
    }
}
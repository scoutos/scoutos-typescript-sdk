/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Workflow } from "./Workflow";

export const SrcHandlersGetWorkflowResponse: core.serialization.ObjectSchema<
    serializers.SrcHandlersGetWorkflowResponse.Raw,
    Scout.SrcHandlersGetWorkflowResponse
> = core.serialization.object({
    data: Workflow,
});

export declare namespace SrcHandlersGetWorkflowResponse {
    export interface Raw {
        data: Workflow.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Workflow } from "./Workflow";

export const SrcHandlersListWorkflowRevisionsResponse: core.serialization.ObjectSchema<
    serializers.SrcHandlersListWorkflowRevisionsResponse.Raw,
    Scout.SrcHandlersListWorkflowRevisionsResponse
> = core.serialization.object({
    data: core.serialization.list(Workflow),
});

export declare namespace SrcHandlersListWorkflowRevisionsResponse {
    interface Raw {
        data: Workflow.Raw[];
    }
}
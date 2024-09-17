/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const WorkflowRunEventNames: core.serialization.Schema<
    serializers.WorkflowRunEventNames.Raw,
    Scout.WorkflowRunEventNames
> = core.serialization.enum_([
    "workflow_run_started",
    "workflow_run_completed",
    "workflow_run_failed",
    "block_run_started",
    "block_run_completed",
    "block_run_failed",
    "block_state_updated",
]);

export declare namespace WorkflowRunEventNames {
    type Raw =
        | "workflow_run_started"
        | "workflow_run_completed"
        | "workflow_run_failed"
        | "block_run_started"
        | "block_run_completed"
        | "block_run_failed"
        | "block_state_updated";
}

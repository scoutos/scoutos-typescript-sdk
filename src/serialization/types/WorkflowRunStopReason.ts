/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const WorkflowRunStopReason: core.serialization.Schema<
    serializers.WorkflowRunStopReason.Raw,
    Scout.WorkflowRunStopReason
> = core.serialization.enum_(["workflow_run_completed", "workflow_run_failed"]);

export declare namespace WorkflowRunStopReason {
    export type Raw = "workflow_run_completed" | "workflow_run_failed";
}

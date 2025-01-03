/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface WorkflowRun {
    stop_reason: Scout.WorkflowRunStopReason;
    state?: Record<string, Scout.WorkflowRunStateValue | undefined>;
    errors?: string[];
    session_id: string;
    workflow_run_id: string;
}

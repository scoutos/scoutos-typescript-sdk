/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type WorkflowRunEventNames =
    | "workflow_run_started"
    | "workflow_run_completed"
    | "workflow_run_failed"
    | "block_run_started"
    | "block_run_completed"
    | "block_run_failed"
    | "block_state_updated";

export const WorkflowRunEventNames = {
    WorkflowRunStarted: "workflow_run_started",
    WorkflowRunCompleted: "workflow_run_completed",
    WorkflowRunFailed: "workflow_run_failed",
    BlockRunStarted: "block_run_started",
    BlockRunCompleted: "block_run_completed",
    BlockRunFailed: "block_run_failed",
    BlockStateUpdated: "block_state_updated",
} as const;
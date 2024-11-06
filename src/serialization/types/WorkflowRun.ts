/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { WorkflowRunStopReason } from "./WorkflowRunStopReason";
import { WorkflowRunStateValue } from "./WorkflowRunStateValue";

export const WorkflowRun: core.serialization.ObjectSchema<serializers.WorkflowRun.Raw, Scout.WorkflowRun> =
    core.serialization.object({
        stop_reason: WorkflowRunStopReason,
        state: core.serialization.record(core.serialization.string(), WorkflowRunStateValue.optional()).optional(),
        errors: core.serialization.list(core.serialization.string()).optional(),
        session_id: core.serialization.string(),
        workflow_run_id: core.serialization.string(),
    });

export declare namespace WorkflowRun {
    interface Raw {
        stop_reason: WorkflowRunStopReason.Raw;
        state?: Record<string, WorkflowRunStateValue.Raw | null | undefined> | null;
        errors?: string[] | null;
        session_id: string;
        workflow_run_id: string;
    }
}

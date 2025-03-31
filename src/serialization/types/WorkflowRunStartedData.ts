/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Actor } from "./Actor";

export const WorkflowRunStartedData: core.serialization.ObjectSchema<
    serializers.WorkflowRunStartedData.Raw,
    Scout.WorkflowRunStartedData
> = core.serialization.object({
    actor: Actor.optional(),
    workflow_id: core.serialization.string(),
    workflow_run_id: core.serialization.string().optional(),
    inputs: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    session_id: core.serialization.string().optional(),
    state: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    workflow_config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    price: core.serialization.number(),
});

export declare namespace WorkflowRunStartedData {
    export interface Raw {
        actor?: Actor.Raw | null;
        workflow_id: string;
        workflow_run_id?: string | null;
        inputs: Record<string, unknown>;
        session_id?: string | null;
        state?: Record<string, unknown> | null;
        workflow_config?: Record<string, unknown> | null;
        price: number;
    }
}

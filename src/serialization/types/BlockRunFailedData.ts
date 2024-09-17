/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockRunFailedData: core.serialization.ObjectSchema<
    serializers.BlockRunFailedData.Raw,
    Scout.BlockRunFailedData
> = core.serialization.object({
    workflowId: core.serialization.property("workflow_id", core.serialization.string()),
    workflowRunId: core.serialization.property("workflow_run_id", core.serialization.string()),
    blockId: core.serialization.property("block_id", core.serialization.string().optional()),
    cost: core.serialization.number().optional(),
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    message: core.serialization.string(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    state: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    sessionId: core.serialization.property("session_id", core.serialization.string()),
});

export declare namespace BlockRunFailedData {
    interface Raw {
        workflow_id: string;
        workflow_run_id: string;
        block_id?: string | null;
        cost?: number | null;
        config: Record<string, unknown>;
        message: string;
        metadata?: Record<string, unknown> | null;
        state: Record<string, unknown>;
        session_id: string;
    }
}

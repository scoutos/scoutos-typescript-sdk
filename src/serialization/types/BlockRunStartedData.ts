/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockRunStartedData: core.serialization.ObjectSchema<
    serializers.BlockRunStartedData.Raw,
    Scout.BlockRunStartedData
> = core.serialization.object({
    workflowId: core.serialization.property("workflow_id", core.serialization.string()),
    workflowRunId: core.serialization.property("workflow_run_id", core.serialization.string()),
    blockId: core.serialization.property("block_id", core.serialization.string().optional()),
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    state: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    sessionId: core.serialization.property("session_id", core.serialization.string()),
});

export declare namespace BlockRunStartedData {
    interface Raw {
        workflow_id: string;
        workflow_run_id: string;
        block_id?: string | null;
        config: Record<string, unknown>;
        metadata?: Record<string, unknown> | null;
        state: Record<string, unknown>;
        session_id: string;
    }
}

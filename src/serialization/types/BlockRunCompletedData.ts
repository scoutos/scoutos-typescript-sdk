/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockRunCompletedData: core.serialization.ObjectSchema<
    serializers.BlockRunCompletedData.Raw,
    Scout.BlockRunCompletedData
> = core.serialization.object({
    appId: core.serialization.property("app_id", core.serialization.string()),
    appRunId: core.serialization.property("app_run_id", core.serialization.string()),
    blockId: core.serialization.property("block_id", core.serialization.string().optional()),
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    cost: core.serialization.number().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    state: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    sessionId: core.serialization.property("session_id", core.serialization.string()),
});

export declare namespace BlockRunCompletedData {
    interface Raw {
        app_id: string;
        app_run_id: string;
        block_id?: string | null;
        config: Record<string, unknown>;
        cost?: number | null;
        metadata?: Record<string, unknown> | null;
        state: Record<string, unknown>;
        session_id: string;
    }
}

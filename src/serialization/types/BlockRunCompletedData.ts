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
    workflow_id: core.serialization.string(),
    workflow_run_id: core.serialization.string(),
    block_id: core.serialization.string().optional(),
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    cost: core.serialization.number().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    state: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    session_id: core.serialization.string(),
    price: core.serialization.number(),
    block_type: core.serialization.string().optional(),
});

export declare namespace BlockRunCompletedData {
    export interface Raw {
        workflow_id: string;
        workflow_run_id: string;
        block_id?: string | null;
        config: Record<string, unknown>;
        cost?: number | null;
        metadata?: Record<string, unknown> | null;
        state: Record<string, unknown>;
        session_id: string;
        price: number;
        block_type?: string | null;
    }
}

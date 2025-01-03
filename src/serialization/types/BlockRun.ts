/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockRun: core.serialization.ObjectSchema<serializers.BlockRun.Raw, Scout.BlockRun> =
    core.serialization.object({
        block_archetype_id: core.serialization.string(),
        block_type: core.serialization.string(),
        block_id: core.serialization.string(),
        block_display_name: core.serialization.string().optional(),
        block_inputs: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        block_output: core.serialization.unknown(),
        config: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        elapsed_time_ms: core.serialization.number().optional(),
        cost: core.serialization.number().optional(),
        status: core.serialization.string().optional(),
        timestamp_start: core.serialization.date().optional(),
        timestamp_end: core.serialization.date().optional(),
    });

export declare namespace BlockRun {
    interface Raw {
        block_archetype_id: string;
        block_type: string;
        block_id: string;
        block_display_name?: string | null;
        block_inputs: Record<string, unknown>;
        block_output?: unknown;
        config: Record<string, unknown>;
        metadata?: Record<string, unknown> | null;
        elapsed_time_ms?: number | null;
        cost?: number | null;
        status?: string | null;
        timestamp_start?: string | null;
        timestamp_end?: string | null;
    }
}
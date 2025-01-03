/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface BlockRun {
    block_archetype_id: string;
    block_type: string;
    block_id: string;
    block_display_name?: string;
    block_inputs: Record<string, unknown>;
    block_output?: unknown;
    config: Record<string, unknown>;
    metadata?: Record<string, unknown>;
    elapsed_time_ms?: number;
    cost?: number;
    status?: string;
    timestamp_start?: Date;
    timestamp_end?: Date;
}

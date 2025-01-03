/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface BlockRunCompletedData {
    workflow_id: string;
    workflow_run_id: string;
    block_id?: string;
    config: Record<string, unknown>;
    cost?: number;
    metadata?: Record<string, unknown>;
    state: Record<string, unknown>;
    session_id: string;
    price: number;
    block_type?: string;
}

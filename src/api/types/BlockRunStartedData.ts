/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface BlockRunStartedData {
    workflow_id: string;
    workflow_run_id: string;
    block_id?: string;
    config: Record<string, unknown>;
    metadata?: Record<string, unknown>;
    state: Record<string, unknown>;
    session_id: string;
    block_type?: string;
}

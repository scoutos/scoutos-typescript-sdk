/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface BlockRunCompletedData {
    appId: string;
    appRunId: string;
    blockId?: string;
    config: Record<string, unknown>;
    cost?: number;
    metadata?: Record<string, unknown>;
    state: Record<string, unknown>;
    sessionId: string;
}

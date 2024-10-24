/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface WorkflowRunStartedData {
    actor?: Scout.Actor;
    workflowId: string;
    workflowRunId?: string;
    inputs: Record<string, unknown>;
    sessionId?: string;
    state?: Record<string, unknown>;
    workflowConfig?: Record<string, unknown>;
}

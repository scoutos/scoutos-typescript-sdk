/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface WorkflowRunStarted {
    organization_id: string;
    /** The unique identifier of the event */
    id?: string;
    /** Identifies the root cause of the event. If not set, it defaults to the event id. */
    correlation_id?: string;
    name: "workflow_run_started";
    version?: Scout.EventVersion;
    environment: Scout.WorkflowRunStartedEnvironment;
    /** The timestamp of the event as UTC ISO 8601 string */
    timestamp?: string;
    data: Scout.WorkflowRunStartedData;
}

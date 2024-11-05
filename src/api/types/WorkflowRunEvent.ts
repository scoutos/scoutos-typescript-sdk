/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface WorkflowRunEvent {
    organizationId: string;
    /** The unique identifier of the event */
    id?: string;
    /** Identifies the root cause of the event. If not set, it defaults to the event id. */
    correlationId?: string;
    name: Scout.EventName;
    version: Scout.EventVersion;
    environment: Scout.WorkflowRunEventEnvironment;
    /** The timestamp of the event as UTC ISO 8601 string */
    timestamp?: string;
    data: Scout.WorkflowRunEventData;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface BlockRunStarted {
    organization_id: string;
    /** The unique identifier of the event */
    id?: string;
    /** Identifies the root cause of the event. If not set, it defaults to the event id. */
    correlation_id?: string;
    name?: "block_run_started";
    environment: Scout.BlockRunStartedEnvironment;
    /** The timestamp of the event as UTC ISO 8601 string */
    timestamp?: string;
    data: Scout.BlockRunStartedData;
    price: string;
    event_type: string;
    version: Scout.EventVersion;
}

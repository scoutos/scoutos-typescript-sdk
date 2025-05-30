/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { WorkflowRunFailedEnvironment } from "./WorkflowRunFailedEnvironment";
import { WorkflowRunFailedData } from "./WorkflowRunFailedData";
import { EventVersion } from "./EventVersion";

export const WorkflowRunFailed: core.serialization.ObjectSchema<
    serializers.WorkflowRunFailed.Raw,
    Scout.WorkflowRunFailed
> = core.serialization.object({
    organization_id: core.serialization.string(),
    id: core.serialization.string().optional(),
    correlation_id: core.serialization.string().optional(),
    name: core.serialization.stringLiteral("workflow_run_failed"),
    environment: WorkflowRunFailedEnvironment,
    timestamp: core.serialization.string().optional(),
    data: WorkflowRunFailedData,
    price: core.serialization.string(),
    event_type: core.serialization.string(),
    version: EventVersion,
});

export declare namespace WorkflowRunFailed {
    export interface Raw {
        organization_id: string;
        id?: string | null;
        correlation_id?: string | null;
        name: "workflow_run_failed";
        environment: WorkflowRunFailedEnvironment.Raw;
        timestamp?: string | null;
        data: WorkflowRunFailedData.Raw;
        price: string;
        event_type: string;
        version: EventVersion.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { EventVersion } from "./EventVersion";
import { WorkflowRunFailedEnvironment } from "./WorkflowRunFailedEnvironment";
import { WorkflowRunFailedData } from "./WorkflowRunFailedData";

export const WorkflowRunFailed: core.serialization.ObjectSchema<
    serializers.WorkflowRunFailed.Raw,
    Scout.WorkflowRunFailed
> = core.serialization.object({
    organizationId: core.serialization.property("organization_id", core.serialization.string()),
    id: core.serialization.string().optional(),
    correlationId: core.serialization.property("correlation_id", core.serialization.string().optional()),
    name: core.serialization.stringLiteral("workflow_run_failed"),
    version: EventVersion.optional(),
    environment: WorkflowRunFailedEnvironment,
    timestamp: core.serialization.string().optional(),
    data: WorkflowRunFailedData,
});

export declare namespace WorkflowRunFailed {
    interface Raw {
        organization_id: string;
        id?: string | null;
        correlation_id?: string | null;
        name: "workflow_run_failed";
        version?: EventVersion.Raw | null;
        environment: WorkflowRunFailedEnvironment.Raw;
        timestamp?: string | null;
        data: WorkflowRunFailedData.Raw;
    }
}

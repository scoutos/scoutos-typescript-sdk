/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { EventVersion } from "./EventVersion";
import { WorkflowRunCompletedEnvironment } from "./WorkflowRunCompletedEnvironment";
import { AppRunCompletedData } from "./AppRunCompletedData";

export const WorkflowRunCompleted: core.serialization.ObjectSchema<
    serializers.WorkflowRunCompleted.Raw,
    Scout.WorkflowRunCompleted
> = core.serialization.object({
    organizationId: core.serialization.property("organization_id", core.serialization.string()),
    id: core.serialization.string().optional(),
    correlationId: core.serialization.property("correlation_id", core.serialization.string().optional()),
    version: EventVersion.optional(),
    environment: WorkflowRunCompletedEnvironment,
    timestamp: core.serialization.string().optional(),
    data: AppRunCompletedData,
});

export declare namespace WorkflowRunCompleted {
    interface Raw {
        organization_id: string;
        id?: string | null;
        correlation_id?: string | null;
        version?: EventVersion.Raw | null;
        environment: WorkflowRunCompletedEnvironment.Raw;
        timestamp?: string | null;
        data: AppRunCompletedData.Raw;
    }
}

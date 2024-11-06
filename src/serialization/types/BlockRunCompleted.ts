/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { EventVersion } from "./EventVersion";
import { BlockRunCompletedEnvironment } from "./BlockRunCompletedEnvironment";
import { BlockRunCompletedData } from "./BlockRunCompletedData";

export const BlockRunCompleted: core.serialization.ObjectSchema<
    serializers.BlockRunCompleted.Raw,
    Scout.BlockRunCompleted
> = core.serialization.object({
    organization_id: core.serialization.string(),
    id: core.serialization.string().optional(),
    correlation_id: core.serialization.string().optional(),
    name: core.serialization.stringLiteral("block_run_completed"),
    version: EventVersion.optional(),
    environment: BlockRunCompletedEnvironment,
    timestamp: core.serialization.string().optional(),
    data: BlockRunCompletedData,
});

export declare namespace BlockRunCompleted {
    interface Raw {
        organization_id: string;
        id?: string | null;
        correlation_id?: string | null;
        name: "block_run_completed";
        version?: EventVersion.Raw | null;
        environment: BlockRunCompletedEnvironment.Raw;
        timestamp?: string | null;
        data: BlockRunCompletedData.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockStateUpdatedEnvironment } from "./BlockStateUpdatedEnvironment";
import { BlockStateUpdatedData } from "./BlockStateUpdatedData";
import { EventVersion } from "./EventVersion";

export const BlockStateUpdated: core.serialization.ObjectSchema<
    serializers.BlockStateUpdated.Raw,
    Scout.BlockStateUpdated
> = core.serialization.object({
    organization_id: core.serialization.string(),
    id: core.serialization.string().optional(),
    correlation_id: core.serialization.string().optional(),
    name: core.serialization.stringLiteral("block_state_updated"),
    environment: BlockStateUpdatedEnvironment,
    timestamp: core.serialization.string().optional(),
    data: BlockStateUpdatedData,
    price: core.serialization.string(),
    event_type: core.serialization.string(),
    version: EventVersion,
});

export declare namespace BlockStateUpdated {
    export interface Raw {
        organization_id: string;
        id?: string | null;
        correlation_id?: string | null;
        name: "block_state_updated";
        environment: BlockStateUpdatedEnvironment.Raw;
        timestamp?: string | null;
        data: BlockStateUpdatedData.Raw;
        price: string;
        event_type: string;
        version: EventVersion.Raw;
    }
}

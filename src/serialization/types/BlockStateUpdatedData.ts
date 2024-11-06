/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockStateUpdatedDataUpdateType } from "./BlockStateUpdatedDataUpdateType";

export const BlockStateUpdatedData: core.serialization.ObjectSchema<
    serializers.BlockStateUpdatedData.Raw,
    Scout.BlockStateUpdatedData
> = core.serialization.object({
    workflow_id: core.serialization.string(),
    workflow_run_id: core.serialization.string(),
    block_id: core.serialization.string().optional(),
    block_type: core.serialization.string(),
    update_data: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    update_type: BlockStateUpdatedDataUpdateType.optional(),
});

export declare namespace BlockStateUpdatedData {
    interface Raw {
        workflow_id: string;
        workflow_run_id: string;
        block_id?: string | null;
        block_type: string;
        update_data: Record<string, unknown>;
        update_type?: BlockStateUpdatedDataUpdateType.Raw | null;
    }
}

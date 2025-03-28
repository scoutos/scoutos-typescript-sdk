/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface BlockStateUpdatedData {
    workflow_id: string;
    workflow_run_id: string;
    block_id?: string;
    /** The block archetype ID */
    block_type: string;
    update_data: Record<string, unknown>;
    /** If `complete` represents a full replacement of state, versus `partial` that indicates data must be _merged_. */
    update_type?: Scout.BlockStateUpdatedDataUpdateType;
}

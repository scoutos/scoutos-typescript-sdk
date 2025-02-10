/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Scout from "../../../../api/index";
import * as core from "../../../../core";
import { WorkflowRunStarted } from "../../../types/WorkflowRunStarted";
import { WorkflowRunCompleted } from "../../../types/WorkflowRunCompleted";
import { WorkflowRunFailed } from "../../../types/WorkflowRunFailed";
import { BlockRunStarted } from "../../../types/BlockRunStarted";
import { BlockRunCompleted } from "../../../types/BlockRunCompleted";
import { BlockRunFailed } from "../../../types/BlockRunFailed";
import { BlockStateUpdated } from "../../../types/BlockStateUpdated";

export const WorkflowsRunWithConfigResponseZero: core.serialization.Schema<
    serializers.WorkflowsRunWithConfigResponseZero.Raw,
    Scout.WorkflowsRunWithConfigResponseZero
> = core.serialization.undiscriminatedUnion([
    WorkflowRunStarted,
    WorkflowRunCompleted,
    WorkflowRunFailed,
    BlockRunStarted,
    BlockRunCompleted,
    BlockRunFailed,
    BlockStateUpdated,
]);

export declare namespace WorkflowsRunWithConfigResponseZero {
    type Raw =
        | WorkflowRunStarted.Raw
        | WorkflowRunCompleted.Raw
        | WorkflowRunFailed.Raw
        | BlockRunStarted.Raw
        | BlockRunCompleted.Raw
        | BlockRunFailed.Raw
        | BlockStateUpdated.Raw;
}

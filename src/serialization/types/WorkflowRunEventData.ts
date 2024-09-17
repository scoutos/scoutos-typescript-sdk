/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockRunCompleted } from "./BlockRunCompleted";
import { BlockRunFailed } from "./BlockRunFailed";
import { BlockRunStarted } from "./BlockRunStarted";
import { BlockStateUpdated } from "./BlockStateUpdated";
import { WorkflowRunCompleted } from "./WorkflowRunCompleted";
import { WorkflowRunFailed } from "./WorkflowRunFailed";
import { WorkflowRunStarted } from "./WorkflowRunStarted";

export const WorkflowRunEventData: core.serialization.Schema<
    serializers.WorkflowRunEventData.Raw,
    Scout.WorkflowRunEventData
> = core.serialization
    .union("name", {
        block_run_completed: BlockRunCompleted,
        block_run_failed: BlockRunFailed,
        block_run_started: BlockRunStarted,
        block_state_updated: BlockStateUpdated,
        workflow_run_completed: WorkflowRunCompleted,
        workflow_run_failed: WorkflowRunFailed,
        workflow_run_started: WorkflowRunStarted,
    })
    .transform<Scout.WorkflowRunEventData>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorkflowRunEventData {
    type Raw =
        | WorkflowRunEventData.BlockRunCompleted
        | WorkflowRunEventData.BlockRunFailed
        | WorkflowRunEventData.BlockRunStarted
        | WorkflowRunEventData.BlockStateUpdated
        | WorkflowRunEventData.WorkflowRunCompleted
        | WorkflowRunEventData.WorkflowRunFailed
        | WorkflowRunEventData.WorkflowRunStarted;

    interface BlockRunCompleted extends BlockRunCompleted.Raw {
        name: "block_run_completed";
    }

    interface BlockRunFailed extends BlockRunFailed.Raw {
        name: "block_run_failed";
    }

    interface BlockRunStarted extends BlockRunStarted.Raw {
        name: "block_run_started";
    }

    interface BlockStateUpdated extends BlockStateUpdated.Raw {
        name: "block_state_updated";
    }

    interface WorkflowRunCompleted extends WorkflowRunCompleted.Raw {
        name: "workflow_run_completed";
    }

    interface WorkflowRunFailed extends WorkflowRunFailed.Raw {
        name: "workflow_run_failed";
    }

    interface WorkflowRunStarted extends WorkflowRunStarted.Raw {
        name: "workflow_run_started";
    }
}

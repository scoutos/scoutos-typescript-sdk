/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockOutput } from "./BlockOutput";
import { WorkflowNoteOutput } from "./WorkflowNoteOutput";
import { PlaceholderOutput } from "./PlaceholderOutput";

export const WorkflowConfigOutput: core.serialization.ObjectSchema<
    serializers.WorkflowConfigOutput.Raw,
    Scout.WorkflowConfigOutput
> = core.serialization.object({
    workflow_display_name: core.serialization.string().optional(),
    workflow_schema_version: core.serialization.string().optional(),
    workflow_img_url: core.serialization.string().optional(),
    workflow_description: core.serialization.string().optional(),
    blocks: core.serialization.list(BlockOutput).optional(),
    notes: core.serialization.list(WorkflowNoteOutput).optional(),
    placeholders: core.serialization.list(PlaceholderOutput).optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
    is_tool: core.serialization.boolean().optional(),
});

export declare namespace WorkflowConfigOutput {
    export interface Raw {
        workflow_display_name?: string | null;
        workflow_schema_version?: string | null;
        workflow_img_url?: string | null;
        workflow_description?: string | null;
        blocks?: BlockOutput.Raw[] | null;
        notes?: WorkflowNoteOutput.Raw[] | null;
        placeholders?: PlaceholderOutput.Raw[] | null;
        tags?: string[] | null;
        is_tool?: boolean | null;
    }
}

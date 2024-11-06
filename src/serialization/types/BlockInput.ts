/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockInputBlockConfigItem } from "./BlockInputBlockConfigItem";
import { Dependency } from "./Dependency";
import { NodeUi } from "./NodeUi";

export const BlockInput: core.serialization.ObjectSchema<serializers.BlockInput.Raw, Scout.BlockInput> =
    core.serialization.object({
        block_archetype_id: core.serialization.string(),
        block_config: core.serialization.list(BlockInputBlockConfigItem).optional(),
        block_display_name: core.serialization.string(),
        block_id: core.serialization.string(),
        block_inputs: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        block_is_output: core.serialization.boolean().optional(),
        dependencies: core.serialization.list(Dependency).optional(),
        input_schema: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        output_schema: core.serialization.list(core.serialization.unknown()).optional(),
        ui: NodeUi.optional(),
    });

export declare namespace BlockInput {
    interface Raw {
        block_archetype_id: string;
        block_config?: BlockInputBlockConfigItem.Raw[] | null;
        block_display_name: string;
        block_id: string;
        block_inputs?: Record<string, unknown> | null;
        block_is_output?: boolean | null;
        dependencies?: Dependency.Raw[] | null;
        input_schema?: Record<string, unknown> | null;
        output_schema?: unknown[] | null;
        ui?: NodeUi.Raw | null;
    }
}

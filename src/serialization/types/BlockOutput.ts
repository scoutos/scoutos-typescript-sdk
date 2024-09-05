/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockOutputBlockConfigItem } from "./BlockOutputBlockConfigItem";
import { Dependency } from "./Dependency";
import { NodeUi } from "./NodeUi";

export const BlockOutput: core.serialization.ObjectSchema<serializers.BlockOutput.Raw, Scout.BlockOutput> =
    core.serialization.object({
        blockArchetypeId: core.serialization.property("block_archetype_id", core.serialization.string()),
        blockConfig: core.serialization.property(
            "block_config",
            core.serialization.list(BlockOutputBlockConfigItem).optional()
        ),
        blockDisplayName: core.serialization.property("block_display_name", core.serialization.string()),
        blockId: core.serialization.property("block_id", core.serialization.string()),
        blockInputs: core.serialization.property(
            "block_inputs",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        blockIsOutput: core.serialization.property("block_is_output", core.serialization.boolean().optional()),
        dependencies: core.serialization.list(Dependency).optional(),
        inputSchema: core.serialization.property(
            "input_schema",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        outputSchema: core.serialization.property(
            "output_schema",
            core.serialization.list(core.serialization.unknown()).optional()
        ),
        ui: NodeUi.optional(),
    });

export declare namespace BlockOutput {
    interface Raw {
        block_archetype_id: string;
        block_config?: BlockOutputBlockConfigItem.Raw[] | null;
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

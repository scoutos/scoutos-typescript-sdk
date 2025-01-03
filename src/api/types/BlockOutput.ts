/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface BlockOutput {
    block_archetype_id: string;
    block_config?: Scout.BlockOutputBlockConfigItem[];
    block_display_name: string;
    block_id: string;
    block_inputs?: Record<string, unknown>;
    block_is_output?: boolean;
    dependencies?: Scout.Dependency[];
    input_schema?: Record<string, unknown>;
    output_schema?: unknown[];
    ui?: Scout.NodeUi;
    trigger_config?: Record<string, unknown>;
}

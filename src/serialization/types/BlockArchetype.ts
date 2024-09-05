/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockArchetype: core.serialization.ObjectSchema<serializers.BlockArchetype.Raw, Scout.BlockArchetype> =
    core.serialization.object({
        archetypeId: core.serialization.property("archetype_id", core.serialization.string()),
        displayName: core.serialization.property("display_name", core.serialization.string()),
        inputSchema: core.serialization.property(
            "input_schema",
            core.serialization.record(core.serialization.string(), core.serialization.unknown())
        ),
        outputSchema: core.serialization.property(
            "output_schema",
            core.serialization.record(core.serialization.string(), core.serialization.unknown())
        ),
    });

export declare namespace BlockArchetype {
    interface Raw {
        archetype_id: string;
        display_name: string;
        input_schema: Record<string, unknown>;
        output_schema: Record<string, unknown>;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const NodeOutput: core.serialization.Schema<serializers.NodeOutput.Raw, Scout.NodeOutput> =
    core.serialization.undiscriminatedUnion([
        core.serialization.boolean(),
        core.serialization.string(),
        core.serialization.number(),
        core.serialization.number(),
        core.serialization.list(core.serialization.unknown()),
        core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    ]);

export declare namespace NodeOutput {
    type Raw = boolean | string | number | number | unknown[] | Record<string, unknown>;
}

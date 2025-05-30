/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const Message: core.serialization.ObjectSchema<serializers.Message.Raw, Scout.Message> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        outputs: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace Message {
    export interface Raw {
        id?: string | null;
        outputs?: Record<string, unknown> | null;
    }
}

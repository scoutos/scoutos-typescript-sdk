/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockConfigItemBoolean: core.serialization.ObjectSchema<
    serializers.BlockConfigItemBoolean.Raw,
    Scout.BlockConfigItemBoolean
> = core.serialization.object({
    id: core.serialization.string(),
    display_name: core.serialization.string(),
    type: core.serialization.stringLiteral("boolean"),
    default_value: core.serialization.boolean().optional(),
    value: core.serialization.boolean().optional(),
});

export declare namespace BlockConfigItemBoolean {
    export interface Raw {
        id: string;
        display_name: string;
        type: "boolean";
        default_value?: boolean | null;
        value?: boolean | null;
    }
}

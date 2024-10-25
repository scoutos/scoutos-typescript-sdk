/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockConfigItemJson: core.serialization.ObjectSchema<
    serializers.BlockConfigItemJson.Raw,
    Scout.BlockConfigItemJson
> = core.serialization.object({
    id: core.serialization.string(),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    type: core.serialization.stringLiteral("json"),
    defaultValue: core.serialization.property("default_value", core.serialization.string().optional()),
    value: core.serialization.string().optional(),
});

export declare namespace BlockConfigItemJson {
    interface Raw {
        id: string;
        display_name: string;
        type: "json";
        default_value?: string | null;
        value?: string | null;
    }
}

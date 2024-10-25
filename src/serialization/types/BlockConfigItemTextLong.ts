/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockConfigItemTextLongValue } from "./BlockConfigItemTextLongValue";

export const BlockConfigItemTextLong: core.serialization.ObjectSchema<
    serializers.BlockConfigItemTextLong.Raw,
    Scout.BlockConfigItemTextLong
> = core.serialization.object({
    id: core.serialization.string(),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    type: core.serialization.stringLiteral("text-long"),
    defaultValue: core.serialization.property("default_value", core.serialization.string().optional()),
    value: BlockConfigItemTextLongValue.optional(),
});

export declare namespace BlockConfigItemTextLong {
    interface Raw {
        id: string;
        display_name: string;
        type: "text-long";
        default_value?: string | null;
        value?: BlockConfigItemTextLongValue.Raw | null;
    }
}

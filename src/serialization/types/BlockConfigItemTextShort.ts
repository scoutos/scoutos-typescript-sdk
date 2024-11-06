/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const BlockConfigItemTextShort: core.serialization.ObjectSchema<
    serializers.BlockConfigItemTextShort.Raw,
    Scout.BlockConfigItemTextShort
> = core.serialization.object({
    id: core.serialization.string(),
    display_name: core.serialization.string(),
    type: core.serialization.stringLiteral("text-short"),
    default_value: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace BlockConfigItemTextShort {
    interface Raw {
        id: string;
        display_name: string;
        type: "text-short";
        default_value?: string | null;
        value?: string | null;
    }
}

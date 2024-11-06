/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const ColumnTypeItemTextLong: core.serialization.ObjectSchema<
    serializers.ColumnTypeItemTextLong.Raw,
    Scout.ColumnTypeItemTextLong
> = core.serialization.object({
    column_id: core.serialization.string().optional(),
    column_display_name: core.serialization.string().optional(),
    column_type: core.serialization.stringLiteral("text-long"),
    default_value: core.serialization.string().optional(),
    data_type: core.serialization.stringLiteral("string").optional(),
});

export declare namespace ColumnTypeItemTextLong {
    interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "text-long";
        default_value?: string | null;
        data_type?: "string" | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const ColumnTypeItemTextShort: core.serialization.ObjectSchema<
    serializers.ColumnTypeItemTextShort.Raw,
    Scout.ColumnTypeItemTextShort
> = core.serialization.object({
    column_id: core.serialization.string().optional(),
    column_display_name: core.serialization.string().optional(),
    column_type: core.serialization.stringLiteral("text-short"),
    default_value: core.serialization.string().optional(),
    data_type: core.serialization.stringLiteral("string").optional(),
});

export declare namespace ColumnTypeItemTextShort {
    interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "text-short";
        default_value?: string | null;
        data_type?: "string" | null;
    }
}

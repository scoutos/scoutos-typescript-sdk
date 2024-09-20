/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SelectOptionItem } from "./SelectOptionItem";

export const ColumnTypeItemSelect: core.serialization.ObjectSchema<
    serializers.ColumnTypeItemSelect.Raw,
    Scout.ColumnTypeItemSelect
> = core.serialization.object({
    columnId: core.serialization.property("column_id", core.serialization.string().optional()),
    columnDisplayName: core.serialization.property("column_display_name", core.serialization.string().optional()),
    columnType: core.serialization.property("column_type", core.serialization.stringLiteral("select")),
    options: core.serialization.list(SelectOptionItem),
    selectedOption: core.serialization.property("selected_option", core.serialization.number().optional()),
    dataType: core.serialization.property("data_type", core.serialization.stringLiteral("string").optional()),
});

export declare namespace ColumnTypeItemSelect {
    interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "select";
        options: SelectOptionItem.Raw[];
        selected_option?: number | null;
        data_type?: "string" | null;
    }
}

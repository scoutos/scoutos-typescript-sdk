/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { SelectOptionItem } from "./SelectOptionItem";

export const SelectColumn: core.serialization.ObjectSchema<serializers.SelectColumn.Raw, Scout.SelectColumn> =
    core.serialization.object({
        column_id: core.serialization.string().optional(),
        column_display_name: core.serialization.string().optional(),
        column_type: core.serialization.stringLiteral("select"),
        data_type: core.serialization.stringLiteral("string").optional(),
        hidden: core.serialization.boolean().optional(),
        options: core.serialization.list(SelectOptionItem).optional(),
        selected_option: core.serialization.number().optional(),
    });

export declare namespace SelectColumn {
    export interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "select";
        data_type?: "string" | null;
        hidden?: boolean | null;
        options?: SelectOptionItem.Raw[] | null;
        selected_option?: number | null;
    }
}

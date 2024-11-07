/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { NumberColumnDefault } from "./NumberColumnDefault";
import { NumberColumnMinValue } from "./NumberColumnMinValue";
import { NumberColumnMaxValue } from "./NumberColumnMaxValue";

export const NumberColumn: core.serialization.ObjectSchema<serializers.NumberColumn.Raw, Scout.NumberColumn> =
    core.serialization.object({
        column_id: core.serialization.string().optional(),
        column_display_name: core.serialization.string().optional(),
        column_type: core.serialization.stringLiteral("number"),
        data_type: core.serialization.stringLiteral("number").optional(),
        hidden: core.serialization.boolean().optional(),
        default: NumberColumnDefault.optional(),
        min_value: NumberColumnMinValue.optional(),
        max_value: NumberColumnMaxValue.optional(),
    });

export declare namespace NumberColumn {
    interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "number";
        data_type?: "number" | null;
        hidden?: boolean | null;
        default?: NumberColumnDefault.Raw | null;
        min_value?: NumberColumnMinValue.Raw | null;
        max_value?: NumberColumnMaxValue.Raw | null;
    }
}

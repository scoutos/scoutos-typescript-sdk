/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const UrlColumn: core.serialization.ObjectSchema<serializers.UrlColumn.Raw, Scout.UrlColumn> =
    core.serialization.object({
        column_id: core.serialization.string().optional(),
        column_display_name: core.serialization.string().optional(),
        column_type: core.serialization.stringLiteral("url"),
        data_type: core.serialization.stringLiteral("string").optional(),
        hidden: core.serialization.boolean().optional(),
        default: core.serialization.string().optional(),
    });

export declare namespace UrlColumn {
    export interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "url";
        data_type?: "string" | null;
        hidden?: boolean | null;
        default?: string | null;
    }
}

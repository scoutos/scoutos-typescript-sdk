/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const MarkdownColumn: core.serialization.ObjectSchema<serializers.MarkdownColumn.Raw, Scout.MarkdownColumn> =
    core.serialization.object({
        column_id: core.serialization.string().optional(),
        column_display_name: core.serialization.string().optional(),
        column_type: core.serialization.stringLiteral("markdown"),
        data_type: core.serialization.stringLiteral("string").optional(),
        hidden: core.serialization.boolean().optional(),
        default: core.serialization.string().optional(),
    });

export declare namespace MarkdownColumn {
    export interface Raw {
        column_id?: string | null;
        column_display_name?: string | null;
        column_type: "markdown";
        data_type?: "string" | null;
        hidden?: boolean | null;
        default?: string | null;
    }
}

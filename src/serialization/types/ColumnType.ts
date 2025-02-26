/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const ColumnType: core.serialization.Schema<serializers.ColumnType.Raw, Scout.ColumnType> =
    core.serialization.enum_(["checkbox", "json", "number", "select", "text-long", "text-short", "url", "markdown"]);

export declare namespace ColumnType {
    type Raw = "checkbox" | "json" | "number" | "select" | "text-long" | "text-short" | "url" | "markdown";
}

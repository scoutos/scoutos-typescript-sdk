/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Scout from "../../../../api/index";
import * as core from "../../../../core";
import { CheckBoxColumn } from "../../../types/CheckBoxColumn";
import { JsonColumn } from "../../../types/JsonColumn";
import { MarkdownColumn } from "../../../types/MarkdownColumn";
import { NumberColumn } from "../../../types/NumberColumn";
import { SelectColumn } from "../../../types/SelectColumn";
import { TextLongColumn } from "../../../types/TextLongColumn";
import { TextShortColumn } from "../../../types/TextShortColumn";
import { UrlColumn } from "../../../types/UrlColumn";

export const TableDataSchemaItem: core.serialization.Schema<
    serializers.TableDataSchemaItem.Raw,
    Scout.TableDataSchemaItem
> = core.serialization.undiscriminatedUnion([
    CheckBoxColumn,
    JsonColumn,
    MarkdownColumn,
    NumberColumn,
    SelectColumn,
    TextLongColumn,
    TextShortColumn,
    UrlColumn,
]);

export declare namespace TableDataSchemaItem {
    export type Raw =
        | CheckBoxColumn.Raw
        | JsonColumn.Raw
        | MarkdownColumn.Raw
        | NumberColumn.Raw
        | SelectColumn.Raw
        | TextLongColumn.Raw
        | TextShortColumn.Raw
        | UrlColumn.Raw;
}

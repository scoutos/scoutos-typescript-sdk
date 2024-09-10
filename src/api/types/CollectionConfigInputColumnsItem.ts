/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export type CollectionConfigInputColumnsItem =
    | Scout.CollectionConfigInputColumnsItem.Boolean
    | Scout.CollectionConfigInputColumnsItem.Json
    | Scout.CollectionConfigInputColumnsItem.Number
    | Scout.CollectionConfigInputColumnsItem.Select
    | Scout.CollectionConfigInputColumnsItem.TextLong
    | Scout.CollectionConfigInputColumnsItem.TextShort;

export declare namespace CollectionConfigInputColumnsItem {
    interface Boolean extends Scout.ColumnTypeItemCheckBox {
        columnType: "boolean";
    }

    interface Json extends Scout.ColumnTypeItemJson {
        columnType: "json";
    }

    interface Number extends Scout.ColumnTypeItemNumber {
        columnType: "number";
    }

    interface Select extends Scout.ColumnTypeItemSelect {
        columnType: "select";
    }

    interface TextLong extends Scout.ColumnTypeItemTextLong {
        columnType: "text-long";
    }

    interface TextShort extends Scout.ColumnTypeItemTextShort {
        columnType: "text-short";
    }
}

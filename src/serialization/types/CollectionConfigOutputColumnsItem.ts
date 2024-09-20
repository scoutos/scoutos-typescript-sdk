/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { ColumnTypeItemCheckBox } from "./ColumnTypeItemCheckBox";
import { ColumnTypeItemJson } from "./ColumnTypeItemJson";
import { ColumnTypeItemNumber } from "./ColumnTypeItemNumber";
import { ColumnTypeItemSelect } from "./ColumnTypeItemSelect";
import { ColumnTypeItemTextLong } from "./ColumnTypeItemTextLong";
import { ColumnTypeItemTextShort } from "./ColumnTypeItemTextShort";

export const CollectionConfigOutputColumnsItem: core.serialization.Schema<
    serializers.CollectionConfigOutputColumnsItem.Raw,
    Scout.CollectionConfigOutputColumnsItem
> = core.serialization.undiscriminatedUnion([
    ColumnTypeItemCheckBox,
    ColumnTypeItemJson,
    ColumnTypeItemNumber,
    ColumnTypeItemSelect,
    ColumnTypeItemTextLong,
    ColumnTypeItemTextShort,
]);

export declare namespace CollectionConfigOutputColumnsItem {
    type Raw =
        | ColumnTypeItemCheckBox.Raw
        | ColumnTypeItemJson.Raw
        | ColumnTypeItemNumber.Raw
        | ColumnTypeItemSelect.Raw
        | ColumnTypeItemTextLong.Raw
        | ColumnTypeItemTextShort.Raw;
}

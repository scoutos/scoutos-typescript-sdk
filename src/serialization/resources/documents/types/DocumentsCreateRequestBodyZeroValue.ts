/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Scout from "../../../../api/index";
import * as core from "../../../../core";

export const DocumentsCreateRequestBodyZeroValue: core.serialization.Schema<
    serializers.DocumentsCreateRequestBodyZeroValue.Raw,
    Scout.DocumentsCreateRequestBodyZeroValue
> = core.serialization.undiscriminatedUnion([
    core.serialization.boolean(),
    core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    core.serialization.number(),
    core.serialization.number(),
    core.serialization.string(),
]);

export declare namespace DocumentsCreateRequestBodyZeroValue {
    export type Raw = boolean | Record<string, unknown> | number | number | string;
}

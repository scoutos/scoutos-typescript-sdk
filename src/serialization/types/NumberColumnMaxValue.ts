/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const NumberColumnMaxValue: core.serialization.Schema<
    serializers.NumberColumnMaxValue.Raw,
    Scout.NumberColumnMaxValue
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.number()]);

export declare namespace NumberColumnMaxValue {
    export type Raw = number | number;
}

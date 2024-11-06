/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const NumberConfigMaxValue: core.serialization.Schema<
    serializers.NumberConfigMaxValue.Raw,
    Scout.NumberConfigMaxValue
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.number()]);

export declare namespace NumberConfigMaxValue {
    type Raw = number | number;
}
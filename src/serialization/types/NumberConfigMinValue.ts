/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const NumberConfigMinValue: core.serialization.Schema<
    serializers.NumberConfigMinValue.Raw,
    Scout.NumberConfigMinValue
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.number()]);

export declare namespace NumberConfigMinValue {
    type Raw = number | number;
}
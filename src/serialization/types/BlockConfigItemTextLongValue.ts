/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Prompt } from "./Prompt";

export const BlockConfigItemTextLongValue: core.serialization.Schema<
    serializers.BlockConfigItemTextLongValue.Raw,
    Scout.BlockConfigItemTextLongValue
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.list(Prompt)]);

export declare namespace BlockConfigItemTextLongValue {
    type Raw = string | Prompt.Raw[];
}

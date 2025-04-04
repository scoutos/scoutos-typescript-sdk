/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockRunUsage } from "./BlockRunUsage";

export const Usage: core.serialization.ObjectSchema<serializers.Usage.Raw, Scout.Usage> = core.serialization.object({
    usage: core.serialization.list(BlockRunUsage),
    total_cost: core.serialization.number(),
});

export declare namespace Usage {
    export interface Raw {
        usage: BlockRunUsage.Raw[];
        total_cost: number;
    }
}

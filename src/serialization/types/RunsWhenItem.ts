/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const RunsWhenItem: core.serialization.ObjectSchema<serializers.RunsWhenItem.Raw, Scout.RunsWhenItem> =
    core.serialization.object({
        value1: core.serialization.property("value_1", core.serialization.unknown()),
        operator: core.serialization.unknown(),
        value2: core.serialization.property("value_2", core.serialization.unknown()),
    });

export declare namespace RunsWhenItem {
    interface Raw {
        value_1?: unknown;
        operator?: unknown;
        value_2?: unknown;
    }
}

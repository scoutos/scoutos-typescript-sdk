/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockState } from "./BlockState";

export const State: core.serialization.ObjectSchema<serializers.State.Raw, Scout.State> = core.serialization.object({
    blocks: core.serialization.record(core.serialization.string(), BlockState),
});

export declare namespace State {
    interface Raw {
        blocks: Record<string, BlockState.Raw>;
    }
}

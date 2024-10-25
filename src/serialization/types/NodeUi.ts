/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Position } from "./Position";

export const NodeUi: core.serialization.ObjectSchema<serializers.NodeUi.Raw, Scout.NodeUi> = core.serialization.object({
    position: Position.optional(),
});

export declare namespace NodeUi {
    interface Raw {
        position?: Position.Raw | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { TrafilaturaInputTrafilaturaType } from "./TrafilaturaInputTrafilaturaType";

export const TrafilaturaInput: core.serialization.ObjectSchema<
    serializers.TrafilaturaInput.Raw,
    Scout.TrafilaturaInput
> = core.serialization.object({
    text_extractor_type: core.serialization.stringLiteral("trafilatura"),
    trafilatura_type: TrafilaturaInputTrafilaturaType,
});

export declare namespace TrafilaturaInput {
    export interface Raw {
        text_extractor_type: "trafilatura";
        trafilatura_type: TrafilaturaInputTrafilaturaType.Raw;
    }
}

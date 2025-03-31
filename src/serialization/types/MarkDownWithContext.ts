/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const MarkDownWithContext: core.serialization.ObjectSchema<
    serializers.MarkDownWithContext.Raw,
    Scout.MarkDownWithContext
> = core.serialization.object({
    type: core.serialization.stringLiteral("markdown_with_context"),
});

export declare namespace MarkDownWithContext {
    export interface Raw {
        type: "markdown_with_context";
    }
}

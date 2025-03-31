/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const Html2Text: core.serialization.ObjectSchema<serializers.Html2Text.Raw, Scout.Html2Text> =
    core.serialization.object({
        trafilatura_type: core.serialization.stringLiteral("html2text"),
    });

export declare namespace Html2Text {
    export interface Raw {
        trafilatura_type: "html2text";
    }
}

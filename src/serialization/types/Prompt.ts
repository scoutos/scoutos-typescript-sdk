/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { PromptRole } from "./PromptRole";

export const Prompt: core.serialization.ObjectSchema<serializers.Prompt.Raw, Scout.Prompt> = core.serialization.object({
    id: core.serialization.string(),
    role: PromptRole,
    content: core.serialization.string(),
});

export declare namespace Prompt {
    export interface Raw {
        id: string;
        role: PromptRole.Raw;
        content: string;
    }
}

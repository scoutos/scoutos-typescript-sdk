/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const ApiKeyIdentity: core.serialization.ObjectSchema<serializers.ApiKeyIdentity.Raw, Scout.ApiKeyIdentity> =
    core.serialization.object({
        apiKey: core.serialization.property(
            "api_key",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
    });

export declare namespace ApiKeyIdentity {
    interface Raw {
        api_key?: Record<string, unknown> | null;
    }
}

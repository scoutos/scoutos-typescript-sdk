/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const IdentityTypes: core.serialization.Schema<serializers.IdentityTypes.Raw, Scout.IdentityTypes> =
    core.serialization.enum_(["user", "api_key"]);

export declare namespace IdentityTypes {
    export type Raw = "user" | "api_key";
}

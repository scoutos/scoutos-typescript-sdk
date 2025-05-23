/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { EnvironmentDeploymentConfigRevisionLookup } from "./EnvironmentDeploymentConfigRevisionLookup";

export const EnvironmentDeploymentConfig: core.serialization.ObjectSchema<
    serializers.EnvironmentDeploymentConfig.Raw,
    Scout.EnvironmentDeploymentConfig
> = core.serialization.object({
    revision_id: core.serialization.string().optional(),
    revision_lookup: EnvironmentDeploymentConfigRevisionLookup,
    traffic: core.serialization.number().optional(),
});

export declare namespace EnvironmentDeploymentConfig {
    export interface Raw {
        revision_id?: string | null;
        revision_lookup: EnvironmentDeploymentConfigRevisionLookup.Raw;
        traffic?: number | null;
    }
}

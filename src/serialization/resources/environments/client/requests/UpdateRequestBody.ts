/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Scout from "../../../../../api/index";
import * as core from "../../../../../core";
import { EnvironmentDeploymentConfig } from "../../../../types/EnvironmentDeploymentConfig";

export const UpdateRequestBody: core.serialization.Schema<serializers.UpdateRequestBody.Raw, Scout.UpdateRequestBody> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string(),
        deployments: core.serialization.list(EnvironmentDeploymentConfig),
    });

export declare namespace UpdateRequestBody {
    interface Raw {
        name: string;
        description: string;
        deployments: EnvironmentDeploymentConfig.Raw[];
    }
}

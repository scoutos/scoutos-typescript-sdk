/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { EnvironmentConfig } from "./EnvironmentConfig";
import { Identity } from "./Identity";
import { EnvironmentDeploymentDocument } from "./EnvironmentDeploymentDocument";

export const Environment: core.serialization.ObjectSchema<serializers.Environment.Raw, Scout.Environment> =
    core.serialization.object({
        environment_id: core.serialization.string(),
        environment_config: EnvironmentConfig,
        created_at: core.serialization.date(),
        created_by: Identity,
        last_updated_at: core.serialization.date(),
        last_updated_by: Identity,
        deployments: core.serialization.list(EnvironmentDeploymentDocument),
    });

export declare namespace Environment {
    export interface Raw {
        environment_id: string;
        environment_config: EnvironmentConfig.Raw;
        created_at: string;
        created_by: Identity.Raw;
        last_updated_at: string;
        last_updated_by: Identity.Raw;
        deployments: EnvironmentDeploymentDocument.Raw[];
    }
}

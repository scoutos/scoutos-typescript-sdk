/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         description: "description",
 *         deployments: [{
 *                 revision_lookup: Scout.EnvironmentDeploymentConfigRevisionLookup.Latest
 *             }]
 *     }
 */
export interface UpdateRequestBody {
    name: string;
    description: string;
    deployments: Scout.EnvironmentDeploymentConfig[];
}

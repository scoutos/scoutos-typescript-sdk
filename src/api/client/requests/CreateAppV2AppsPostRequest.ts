/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../../index";

/**
 * @example
 *     {
 *         body: {}
 *     }
 */
export interface CreateAppV2AppsPostRequest {
    deployToEndpoint?: boolean;
    body: Scout.AppConfigInput;
}

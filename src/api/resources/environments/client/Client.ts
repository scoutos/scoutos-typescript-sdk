/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Scout from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Environments {
    interface Options {
        environment?: core.Supplier<environments.ScoutEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Environments {
    constructor(protected readonly _options: Environments.Options = {}) {}

    /**
     * List all environments for a workflow in the organization from Firestore.
     *
     * @param {string} workflowId
     * @param {Environments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.environments.list("workflow_id")
     */
    public async list(
        workflowId: string,
        requestOptions?: Environments.RequestOptions
    ): Promise<Scout.AppsServiceHandlersGetWorkflowEnvironmentsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflowId)}/environments`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "scoutos/0.2.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AppsServiceHandlersGetWorkflowEnvironmentsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Scout.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ScoutError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScoutError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScoutTimeoutError();
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update deployments within a workflow environment
     *
     * @param {string} workflowId
     * @param {string} environmentId
     * @param {Scout.UpdateRequestBody} request
     * @param {Environments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.environments.put("workflow_id", "environment_id", {
     *         name: "name",
     *         description: "description",
     *         deployments: [{
     *                 revisionLookup: Scout.EnvironmentDeploymentConfigRevisionLookup.Latest
     *             }]
     *     })
     */
    public async put(
        workflowId: string,
        environmentId: string,
        request: Scout.UpdateRequestBody,
        requestOptions?: Environments.RequestOptions
    ): Promise<Scout.AppsServiceHandlersUpdateWorkflowEnvironmentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflowId)}/environments/${encodeURIComponent(environmentId)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.2.1",
                "User-Agent": "scoutos/0.2.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateRequestBody.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.AppsServiceHandlersUpdateWorkflowEnvironmentResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Scout.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ScoutError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScoutError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScoutTimeoutError();
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["SCOUT_API_KEY"];
        if (bearer == null) {
            throw new errors.ScoutError({
                message: "Please specify SCOUT_API_KEY when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}
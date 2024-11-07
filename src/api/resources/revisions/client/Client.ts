/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Scout from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Revisions {
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

export class Revisions {
    constructor(protected readonly _options: Revisions.Options = {}) {}

    /**
     * List all app revisions in the organization
     *
     * @param {string} workflow_id
     * @param {Revisions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.revisions.list("workflow_id")
     */
    public async list(
        workflow_id: string,
        requestOptions?: Revisions.RequestOptions
    ): Promise<Scout.AppsServiceHandlersListWorkflowRevisionsResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}/revisions`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.6.2",
                "User-Agent": "scoutos/0.6.2",
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
            return serializers.AppsServiceHandlersListWorkflowRevisionsResponse.parseOrThrow(_response.body, {
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
     * @param {string} workflow_id
     * @param {string} revision_id
     * @param {Revisions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.revisions.update("workflow_id", "revision_id")
     */
    public async update(
        workflow_id: string,
        revision_id: string,
        requestOptions?: Revisions.RequestOptions
    ): Promise<Scout.AppsServiceHandlersPromoteWorkflowRevisionResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}/revisions/${encodeURIComponent(revision_id)}/promote`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.6.2",
                "User-Agent": "scoutos/0.6.2",
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
            return serializers.AppsServiceHandlersPromoteWorkflowRevisionResponse.parseOrThrow(_response.body, {
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
     * @param {string} workflow_id
     * @param {string} revision_id
     * @param {Revisions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.revisions.delete("workflow_id", "revision_id")
     */
    public async delete(
        workflow_id: string,
        revision_id: string,
        requestOptions?: Revisions.RequestOptions
    ): Promise<Scout.AppsServiceHandlersDeleteWorkflowRevisionResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}/revisions/${encodeURIComponent(revision_id)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.6.2",
                "User-Agent": "scoutos/0.6.2",
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
            return serializers.AppsServiceHandlersDeleteWorkflowRevisionResponse.parseOrThrow(_response.body, {
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

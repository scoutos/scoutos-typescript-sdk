/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Scout from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as stream from "stream";

export declare namespace Workflows {
    export interface Options {
        environment?: core.Supplier<environments.ScoutEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Workflows {
    constructor(protected readonly _options: Workflows.Options = {}) {}

    /**
     * @param {Scout.WorkflowsCreateRevisionRequest} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.createRevision({
     *         body: {}
     *     })
     */
    public async createRevision(
        request: Scout.WorkflowsCreateRevisionRequest,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.SrcHandlersCreateWorkflowRevisionResponse> {
        const { workflow_id: workflowId, workflow_key: workflowKey, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (workflowId != null) {
            _queryParams["workflow_id"] = workflowId;
        }

        if (workflowKey != null) {
            _queryParams["workflow_key"] = workflowKey;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                "v2/workflows/revisions",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.WorkflowConfigInput.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SrcHandlersCreateWorkflowRevisionResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling POST /v2/workflows/revisions.");
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List all workflows in the organization
     *
     * @param {Scout.WorkflowsListRequest} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.list()
     */
    public async list(
        request: Scout.WorkflowsListRequest = {},
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.SrcHandlersListWorkflowsResponse> {
        const { sort, direction, start_at: startAt, limit, query } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        if (direction != null) {
            _queryParams["direction"] = direction;
        }

        if (startAt != null) {
            _queryParams["start_at"] = startAt;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (query != null) {
            _queryParams["query"] = query;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                "v2/workflows",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SrcHandlersListWorkflowsResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling GET /v2/workflows.");
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Scout.WorkflowsCreateRequest} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.create({
     *         body: {}
     *     })
     */
    public async create(
        request: Scout.WorkflowsCreateRequest,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.SrcHandlersCreateWorkflowResponse> {
        const { workflow_key: workflowKey, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (workflowKey != null) {
            _queryParams["workflow_key"] = workflowKey;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                "v2/workflows",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.WorkflowConfigInput.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SrcHandlersCreateWorkflowResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling POST /v2/workflows.");
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Fetch app configuration by ID.
     *
     * @param {string} workflow_id
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.get("workflow_id")
     */
    public async get(
        workflow_id: string,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.SrcHandlersGetWorkflowResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SrcHandlersGetWorkflowResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling GET /v2/workflows/{workflow_id}.");
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} workflow_id
     * @param {Scout.WorkflowConfigInput} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.update("workflow_id", {})
     */
    public async update(
        workflow_id: string,
        request: Scout.WorkflowConfigInput,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.SrcHandlersUpdateWorkflowResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.WorkflowConfigInput.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SrcHandlersUpdateWorkflowResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling PUT /v2/workflows/{workflow_id}.");
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} workflow_id
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.delete("workflow_id")
     */
    public async delete(
        workflow_id: string,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.SrcHandlersDeleteWorkflowResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SrcHandlersDeleteWorkflowResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling DELETE /v2/workflows/{workflow_id}.");
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async runStream(
        workflow_id: string,
        request: Scout.WorkflowsRunStreamRequest,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<core.Stream<Scout.WorkflowRunStreamResponse>> {
        const { environment, revision_id: revisionId, session_id: sessionId, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (environment != null) {
            _queryParams["environment"] = environment;
        }

        if (revisionId != null) {
            _queryParams["revision_id"] = revisionId;
        }

        if (sessionId != null) {
            _queryParams["session_id"] = sessionId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}/execute`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: {
                ...serializers.WorkflowsRunStreamRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                streaming: true,
            },
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.WorkflowRunStreamResponse.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "sse",
                    streamTerminator: "[DONE]",
                },
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
                        }),
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
                throw new errors.ScoutTimeoutError(
                    "Timeout exceeded when calling POST /v2/workflows/{workflow_id}/execute.",
                );
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} workflow_id
     * @param {Scout.WorkflowsRunRequest} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.run("workflow_id", {})
     */
    public async run(
        workflow_id: string,
        request: Scout.WorkflowsRunRequest,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.WorkflowRunResponse> {
        const { environment, revision_id: revisionId, session_id: sessionId, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (environment != null) {
            _queryParams["environment"] = environment;
        }

        if (revisionId != null) {
            _queryParams["revision_id"] = revisionId;
        }

        if (sessionId != null) {
            _queryParams["session_id"] = sessionId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                `v2/workflows/${encodeURIComponent(workflow_id)}/execute`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: {
                ...serializers.WorkflowsRunRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                streaming: false,
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WorkflowRunResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError(
                    "Timeout exceeded when calling POST /v2/workflows/{workflow_id}/execute.",
                );
            case "unknown":
                throw new errors.ScoutError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Scout.SrcHandlersWorkflowsExecuteWithConfigReqBody} request
     * @param {Workflows.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.workflows.runWithConfig({
     *         workflow_config: {}
     *     })
     */
    public async runWithConfig(
        request: Scout.SrcHandlersWorkflowsExecuteWithConfigReqBody,
        requestOptions?: Workflows.RequestOptions,
    ): Promise<Scout.WorkflowsRunWithConfigResponse> {
        const { environment, revision_id: revisionId, session_id: sessionId, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (environment != null) {
            _queryParams["environment"] = environment;
        }

        if (revisionId != null) {
            _queryParams["revision_id"] = revisionId;
        }

        if (sessionId != null) {
            _queryParams["session_id"] = sessionId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ScoutEnvironment.Prod,
                "v2/workflows/execute",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "scoutos/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.SrcHandlersWorkflowsExecuteWithConfigReqBody.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WorkflowsRunWithConfigResponse.parseOrThrow(_response.body, {
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
                        }),
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
                throw new errors.ScoutTimeoutError("Timeout exceeded when calling POST /v2/workflows/execute.");
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
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a SCOUT_API_KEY environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}

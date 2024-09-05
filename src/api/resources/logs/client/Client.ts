/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Scout from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as serializers from "../../../../serialization/index";

export declare namespace Logs {
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

export class Logs {
    constructor(protected readonly _options: Logs.Options = {}) {}

    /**
     * @param {Scout.LogsRunRequest} request
     * @param {Logs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Scout.UnprocessableEntityError}
     *
     * @example
     *     await client.logs.run({
     *         appId: "app_id"
     *     })
     */
    public async run(request: Scout.LogsRunRequest, requestOptions?: Logs.RequestOptions): Promise<unknown> {
        const { appId, startDate, endDate, limit, sessionId, status, cursor } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["app_id"] = appId;
        if (startDate != null) {
            _queryParams["start_date"] = startDate;
        }

        if (endDate != null) {
            _queryParams["end_date"] = endDate;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (sessionId != null) {
            _queryParams["session_id"] = sessionId;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.ScoutEnvironment.Prod,
                "v2/run_logs"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "scoutos",
                "X-Fern-SDK-Version": "0.0.5",
                "User-Agent": "scoutos/0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = (await core.Supplier.get(this._options.apiKey)) ?? process?.env["SCOUT_API_KEY"];
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}

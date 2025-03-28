/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Workflows } from "./api/resources/workflows/client/Client";
import { Environments } from "./api/resources/environments/client/Client";
import { Revisions } from "./api/resources/revisions/client/Client";
import { Usage } from "./api/resources/usage/client/Client";
import { WorkflowLogs } from "./api/resources/workflowLogs/client/Client";
import { Copilots } from "./api/resources/copilots/client/Client";
import { Collections } from "./api/resources/collections/client/Client";
import { Tables } from "./api/resources/tables/client/Client";
import { Documents } from "./api/resources/documents/client/Client";
import { Sources } from "./api/resources/sources/client/Client";
import { Syncs } from "./api/resources/syncs/client/Client";

export declare namespace ScoutClient {
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

export class ScoutClient {
    constructor(protected readonly _options: ScoutClient.Options = {}) {}

    protected _workflows: Workflows | undefined;

    public get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this._options));
    }

    protected _environments: Environments | undefined;

    public get environments(): Environments {
        return (this._environments ??= new Environments(this._options));
    }

    protected _revisions: Revisions | undefined;

    public get revisions(): Revisions {
        return (this._revisions ??= new Revisions(this._options));
    }

    protected _usage: Usage | undefined;

    public get usage(): Usage {
        return (this._usage ??= new Usage(this._options));
    }

    protected _workflowLogs: WorkflowLogs | undefined;

    public get workflowLogs(): WorkflowLogs {
        return (this._workflowLogs ??= new WorkflowLogs(this._options));
    }

    protected _copilots: Copilots | undefined;

    public get copilots(): Copilots {
        return (this._copilots ??= new Copilots(this._options));
    }

    protected _collections: Collections | undefined;

    public get collections(): Collections {
        return (this._collections ??= new Collections(this._options));
    }

    protected _tables: Tables | undefined;

    public get tables(): Tables {
        return (this._tables ??= new Tables(this._options));
    }

    protected _documents: Documents | undefined;

    public get documents(): Documents {
        return (this._documents ??= new Documents(this._options));
    }

    protected _sources: Sources | undefined;

    public get sources(): Sources {
        return (this._sources ??= new Sources(this._options));
    }

    protected _syncs: Syncs | undefined;

    public get syncs(): Syncs {
        return (this._syncs ??= new Syncs(this._options));
    }
}

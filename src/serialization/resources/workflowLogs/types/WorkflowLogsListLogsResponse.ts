/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Scout from "../../../../api/index";
import * as core from "../../../../core";
import { RunLog } from "../../../types/RunLog";
import { RunLogPagination } from "../../../types/RunLogPagination";

export const WorkflowLogsListLogsResponse: core.serialization.Schema<
    serializers.WorkflowLogsListLogsResponse.Raw,
    Scout.WorkflowLogsListLogsResponse
> = core.serialization.undiscriminatedUnion([RunLog, RunLogPagination]);

export declare namespace WorkflowLogsListLogsResponse {
    export type Raw = RunLog.Raw | RunLogPagination.Raw;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Workflow } from "./Workflow";

export const AppsServiceHandlersListWorkflowsResponse: core.serialization.ObjectSchema<
    serializers.AppsServiceHandlersListWorkflowsResponse.Raw,
    Scout.AppsServiceHandlersListWorkflowsResponse
> = core.serialization.object({
    data: core.serialization.list(Workflow),
    nextCursor: core.serialization.property("next_cursor", core.serialization.date().optional()),
    hasMore: core.serialization.property("has_more", core.serialization.boolean()),
});

export declare namespace AppsServiceHandlersListWorkflowsResponse {
    interface Raw {
        data: Workflow.Raw[];
        next_cursor?: string | null;
        has_more: boolean;
    }
}

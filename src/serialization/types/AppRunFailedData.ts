/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const AppRunFailedData: core.serialization.ObjectSchema<
    serializers.AppRunFailedData.Raw,
    Scout.AppRunFailedData
> = core.serialization.object({
    appId: core.serialization.property("app_id", core.serialization.string()),
    appRunId: core.serialization.property("app_run_id", core.serialization.string()),
    message: core.serialization.string(),
    sessionId: core.serialization.property("session_id", core.serialization.string()),
    appConfig: core.serialization.property(
        "app_config",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace AppRunFailedData {
    interface Raw {
        app_id: string;
        app_run_id: string;
        message: string;
        session_id: string;
        app_config?: Record<string, unknown> | null;
    }
}

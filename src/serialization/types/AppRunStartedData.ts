/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { Actor } from "./Actor";

export const AppRunStartedData: core.serialization.ObjectSchema<
    serializers.AppRunStartedData.Raw,
    Scout.AppRunStartedData
> = core.serialization.object({
    actor: Actor.optional(),
    appId: core.serialization.property("app_id", core.serialization.string()),
    appRunId: core.serialization.property("app_run_id", core.serialization.string().optional()),
    input: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    sessionId: core.serialization.property("session_id", core.serialization.string().optional()),
    state: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    appConfig: core.serialization.property(
        "app_config",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace AppRunStartedData {
    interface Raw {
        actor?: Actor.Raw | null;
        app_id: string;
        app_run_id?: string | null;
        input: Record<string, unknown>;
        session_id?: string | null;
        state?: Record<string, unknown> | null;
        app_config?: Record<string, unknown> | null;
    }
}

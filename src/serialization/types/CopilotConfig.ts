/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { CopilotConfigMode } from "./CopilotConfigMode";
import { CopilotConfigFabValue } from "./CopilotConfigFabValue";

export const CopilotConfig: core.serialization.ObjectSchema<serializers.CopilotConfig.Raw, Scout.CopilotConfig> =
    core.serialization.object({
        workflowId: core.serialization.property("workflow_id", core.serialization.string().optional()),
        imgUrl: core.serialization.property("img_url", core.serialization.string().optional()),
        displayName: core.serialization.property("display_name", core.serialization.string().optional()),
        mode: CopilotConfigMode.optional(),
        colors: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
        fab: core.serialization.record(core.serialization.string(), CopilotConfigFabValue.optional()).optional(),
        messagePlaceholder: core.serialization.property("message_placeholder", core.serialization.string().optional()),
        initialActivity: core.serialization.property(
            "initial_activity",
            core.serialization.list(core.serialization.unknown()).optional()
        ),
        allowedOrigins: core.serialization.property("allowed_origins", core.serialization.string().optional()),
    });

export declare namespace CopilotConfig {
    interface Raw {
        workflow_id?: string | null;
        img_url?: string | null;
        display_name?: string | null;
        mode?: CopilotConfigMode.Raw | null;
        colors?: Record<string, string> | null;
        fab?: Record<string, CopilotConfigFabValue.Raw | null | undefined> | null;
        message_placeholder?: string | null;
        initial_activity?: unknown[] | null;
        allowed_origins?: string | null;
    }
}

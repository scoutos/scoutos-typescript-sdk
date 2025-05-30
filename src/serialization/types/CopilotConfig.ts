/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { CopilotConfigMode } from "./CopilotConfigMode";
import { CopilotConfigCodeTheme } from "./CopilotConfigCodeTheme";
import { CopilotConfigFabValue } from "./CopilotConfigFabValue";

export const CopilotConfig: core.serialization.ObjectSchema<serializers.CopilotConfig.Raw, Scout.CopilotConfig> =
    core.serialization.object({
        workflow_id: core.serialization.string().optional(),
        img_url: core.serialization.string().optional(),
        display_name: core.serialization.string().optional(),
        mode: CopilotConfigMode.optional(),
        code_theme: CopilotConfigCodeTheme.optional(),
        colors: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
        fab: core.serialization.record(core.serialization.string(), CopilotConfigFabValue.optional()).optional(),
        loading_text: core.serialization.string().optional(),
        message_placeholder: core.serialization.string().optional(),
        initial_activity: core.serialization.list(core.serialization.unknown()).optional(),
        allowed_origins: core.serialization.string().optional(),
    });

export declare namespace CopilotConfig {
    export interface Raw {
        workflow_id?: string | null;
        img_url?: string | null;
        display_name?: string | null;
        mode?: CopilotConfigMode.Raw | null;
        code_theme?: CopilotConfigCodeTheme.Raw | null;
        colors?: Record<string, string> | null;
        fab?: Record<string, CopilotConfigFabValue.Raw | null | undefined> | null;
        loading_text?: string | null;
        message_placeholder?: string | null;
        initial_activity?: unknown[] | null;
        allowed_origins?: string | null;
    }
}

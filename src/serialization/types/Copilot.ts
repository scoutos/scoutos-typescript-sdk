/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { CopilotConfig } from "./CopilotConfig";
import { Identity } from "./Identity";

export const Copilot: core.serialization.ObjectSchema<serializers.Copilot.Raw, Scout.Copilot> =
    core.serialization.object({
        copilot_config: CopilotConfig,
        last_updated_at: core.serialization.date(),
        created_at: core.serialization.date(),
        created_by: Identity,
        last_updated_by: Identity,
        revision_id: core.serialization.string(),
        copilot_id: core.serialization.string(),
        is_draft: core.serialization.boolean().optional(),
    });

export declare namespace Copilot {
    interface Raw {
        copilot_config: CopilotConfig.Raw;
        last_updated_at: string;
        created_at: string;
        created_by: Identity.Raw;
        last_updated_by: Identity.Raw;
        revision_id: string;
        copilot_id: string;
        is_draft?: boolean | null;
    }
}

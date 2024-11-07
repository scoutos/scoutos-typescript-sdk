/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { TableConfigOutput } from "./TableConfigOutput";
import { Identity } from "./Identity";

export const Table: core.serialization.ObjectSchema<serializers.Table.Raw, Scout.Table> = core.serialization.object({
    table_config: TableConfigOutput,
    created_at: core.serialization.date().optional(),
    last_updated_at: core.serialization.date().optional(),
    created_by: Identity,
    last_updated_by: Identity,
    revision_id: core.serialization.string(),
    table_id: core.serialization.string(),
});

export declare namespace Table {
    interface Raw {
        table_config: TableConfigOutput.Raw;
        created_at?: string | null;
        last_updated_at?: string | null;
        created_by: Identity.Raw;
        last_updated_by: Identity.Raw;
        revision_id: string;
        table_id: string;
    }
}
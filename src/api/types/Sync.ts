/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface Sync {
    sync_config: Scout.SyncConfigOutput;
    sync_id: string;
    trigger_id?: string;
    last_updated_at: Date;
    created_at: Date;
    created_by: Scout.Identity;
    last_updated_by: Scout.Identity;
}

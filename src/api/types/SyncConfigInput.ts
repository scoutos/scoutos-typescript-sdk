/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface SyncConfigInput {
    source_settings: Scout.SyncConfigInputSourceSettings;
    destination: Scout.CollectionDestination;
    mapping: Scout.Mapping;
    schedule?: Scout.Schedule;
}

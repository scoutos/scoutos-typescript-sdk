/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface Collection {
    collection_config: Scout.CollectionConfigOutput;
    last_updated_at: Date;
    created_at: Date;
    created_by: Scout.Identity;
    last_updated_by: Scout.Identity;
    revision_id: string;
    collection_id: string;
}

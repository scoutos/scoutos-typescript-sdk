/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { CollectionConfig } from "./CollectionConfig";
import { Identity } from "./Identity";

export const Collection: core.serialization.ObjectSchema<serializers.Collection.Raw, Scout.Collection> =
    core.serialization.object({
        collection_config: CollectionConfig,
        last_updated_at: core.serialization.date(),
        created_at: core.serialization.date(),
        created_by: Identity,
        last_updated_by: Identity,
        collection_id: core.serialization.string(),
        revision_id: core.serialization.string(),
    });

export declare namespace Collection {
    export interface Raw {
        collection_config: CollectionConfig.Raw;
        last_updated_at: string;
        created_at: string;
        created_by: Identity.Raw;
        last_updated_by: Identity.Raw;
        collection_id: string;
        revision_id: string;
    }
}

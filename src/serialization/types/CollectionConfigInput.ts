/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { CollectionConfigInputColumnsItem } from "./CollectionConfigInputColumnsItem";

export const CollectionConfigInput: core.serialization.ObjectSchema<
    serializers.CollectionConfigInput.Raw,
    Scout.CollectionConfigInput
> = core.serialization.object({
    collection_display_name: core.serialization.string().optional(),
    collection_img_url: core.serialization.string().optional(),
    collection_description: core.serialization.string().optional(),
    columns: core.serialization.list(CollectionConfigInputColumnsItem).optional(),
});

export declare namespace CollectionConfigInput {
    interface Raw {
        collection_display_name?: string | null;
        collection_img_url?: string | null;
        collection_description?: string | null;
        columns?: CollectionConfigInputColumnsItem.Raw[] | null;
    }
}

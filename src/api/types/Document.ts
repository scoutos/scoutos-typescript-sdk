/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export interface Document {
    document_id?: string;
    data?: Record<string, Scout.DocumentDataValue>;
    document_data_id?: string;
    created_at?: Date;
    last_updated_at?: Date;
    created_by: Scout.Identity;
    last_updated_by: Scout.Identity;
    revision_id?: string;
}

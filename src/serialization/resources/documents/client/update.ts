/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Scout from "../../../../api/index";
import * as core from "../../../../core";
import { DocumentsUpdateRequestValue } from "../types/DocumentsUpdateRequestValue";

export const Request: core.serialization.Schema<
    serializers.documents.update.Request.Raw,
    Record<string, Scout.DocumentsUpdateRequestValue>
> = core.serialization.record(core.serialization.string(), DocumentsUpdateRequestValue);

export declare namespace Request {
    type Raw = Record<string, DocumentsUpdateRequestValue.Raw>;
}

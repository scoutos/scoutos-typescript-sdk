/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";

export const NodeTypes: core.serialization.Schema<serializers.NodeTypes.Raw, Scout.NodeTypes> =
    core.serialization.enum_([
        "text_generation",
        "collection_vector_recall",
        "prompt",
        "scrape_serp",
        "collection_save",
        "http_request",
        "execute_python",
    ]);

export declare namespace NodeTypes {
    type Raw =
        | "text_generation"
        | "collection_vector_recall"
        | "prompt"
        | "scrape_serp"
        | "collection_save"
        | "http_request"
        | "execute_python";
}
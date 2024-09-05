/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export type BlockOutputBlockConfigItem =
    | Scout.BlockOutputBlockConfigItem.Boolean
    | Scout.BlockOutputBlockConfigItem.Json
    | Scout.BlockOutputBlockConfigItem.Number
    | Scout.BlockOutputBlockConfigItem.Prompt
    | Scout.BlockOutputBlockConfigItem.Select
    | Scout.BlockOutputBlockConfigItem.TextLong
    | Scout.BlockOutputBlockConfigItem.TextShort;

export declare namespace BlockOutputBlockConfigItem {
    interface Boolean extends Scout.BlockConfigItemBoolean {
        type: "boolean";
    }

    interface Json extends Scout.BlockConfigItemJson {
        type: "json";
    }

    interface Number extends Scout.BlockConfigItemNumber {
        type: "number";
    }

    interface Prompt extends Scout.BlockConfigItemLlm {
        type: "prompt";
    }

    interface Select extends Scout.BlockConfigItemSelect {
        type: "select";
    }

    interface TextLong extends Scout.BlockConfigItemTextLong {
        type: "text-long";
    }

    interface TextShort extends Scout.BlockConfigItemTextShort {
        type: "text-short";
    }
}

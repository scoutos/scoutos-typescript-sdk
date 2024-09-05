/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Scout from "../../api/index";
import * as core from "../../core";
import { BlockConfigItemBoolean } from "./BlockConfigItemBoolean";
import { BlockConfigItemJson } from "./BlockConfigItemJson";
import { BlockConfigItemNumber } from "./BlockConfigItemNumber";
import { BlockConfigItemLlm } from "./BlockConfigItemLlm";
import { BlockConfigItemSelect } from "./BlockConfigItemSelect";
import { BlockConfigItemTextLong } from "./BlockConfigItemTextLong";
import { BlockConfigItemTextShort } from "./BlockConfigItemTextShort";

export const BlockInputBlockConfigItem: core.serialization.Schema<
    serializers.BlockInputBlockConfigItem.Raw,
    Scout.BlockInputBlockConfigItem
> = core.serialization
    .union("type", {
        boolean: BlockConfigItemBoolean,
        json: BlockConfigItemJson,
        number: BlockConfigItemNumber,
        prompt: BlockConfigItemLlm,
        select: BlockConfigItemSelect,
        "text-long": BlockConfigItemTextLong,
        "text-short": BlockConfigItemTextShort,
    })
    .transform<Scout.BlockInputBlockConfigItem>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace BlockInputBlockConfigItem {
    type Raw =
        | BlockInputBlockConfigItem.Boolean
        | BlockInputBlockConfigItem.Json
        | BlockInputBlockConfigItem.Number
        | BlockInputBlockConfigItem.Prompt
        | BlockInputBlockConfigItem.Select
        | BlockInputBlockConfigItem.TextLong
        | BlockInputBlockConfigItem.TextShort;

    interface Boolean extends BlockConfigItemBoolean.Raw {
        type: "boolean";
    }

    interface Json extends BlockConfigItemJson.Raw {
        type: "json";
    }

    interface Number extends BlockConfigItemNumber.Raw {
        type: "number";
    }

    interface Prompt extends BlockConfigItemLlm.Raw {
        type: "prompt";
    }

    interface Select extends BlockConfigItemSelect.Raw {
        type: "select";
    }

    interface TextLong extends BlockConfigItemTextLong.Raw {
        type: "text-long";
    }

    interface TextShort extends BlockConfigItemTextShort.Raw {
        type: "text-short";
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Scout from "../index";

export type WorkflowRunResponseStreamingData =
    | Scout.AppRunStarted
    | Scout.AppRunCompleted
    | Scout.AppRunFailed
    | Scout.BlockRunStarted
    | Scout.BlockRunCompleted
    | Scout.BlockRunFailed;
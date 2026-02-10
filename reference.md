# Reference
## Workflows
<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">createRevision</a>({ ...params }) -> Scout.SrcHandlersCreateWorkflowRevisionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.createRevision({
    workflow_id: "workflow_id",
    workflow_key: "workflow_key",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.WorkflowsCreateRevisionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">list</a>({ ...params }) -> Scout.SrcHandlersListWorkflowsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all workflows in the organization
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.list({
    sort: "sort",
    direction: "direction",
    start_at: "start_at",
    limit: 1,
    query: "query",
    tags: "tags",
    drive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.WorkflowsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">create</a>({ ...params }) -> Scout.SrcHandlersCreateWorkflowResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.create({
    workflow_key: "workflow_key",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.WorkflowsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">get</a>(workflow_id) -> Scout.SrcHandlersGetWorkflowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch app configuration by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.get("workflow_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">update</a>(workflow_id, { ...params }) -> Scout.SrcHandlersUpdateWorkflowResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.update("workflow_id", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.WorkflowConfigInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">delete</a>(workflow_id) -> Scout.SrcHandlersDeleteWorkflowResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.delete("workflow_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">runStream</a>(workflow_id, { ...params }) -> core.Stream&lt;Scout.WorkflowRunStreamResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.workflows.runStream("workflow_id", {
    environment: "environment",
    revision_id: "revision_id",
    session_id: "session_id"
});
for await (const item of response) {
    console.log(item);
}

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.WorkflowsRunStreamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">run</a>(workflow_id, { ...params }) -> Scout.WorkflowRunResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.run("workflow_id", {
    environment: "environment",
    revision_id: "revision_id",
    session_id: "session_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.WorkflowsRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">runWithConfig</a>({ ...params }) -> Scout.WorkflowsRunWithConfigResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.runWithConfig({
    environment: "environment",
    revision_id: "revision_id",
    session_id: "session_id",
    workflow_config: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.SrcHandlersWorkflowsExecuteWithConfigReqBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## WorkflowRevisions
<details><summary><code>client.workflowRevisions.<a href="/src/api/resources/workflowRevisions/client/Client.ts">update</a>(workflow_id, revision_id, { ...params }) -> Scout.SrcHandlersUpdateWorkflowRevisionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowRevisions.update("workflow_id", "revision_id", {
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**revision_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.Payload` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowRevisions.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Revisions
<details><summary><code>client.revisions.<a href="/src/api/resources/revisions/client/Client.ts">delete</a>(workflow_id, revision_id) -> Scout.SrcHandlersDeleteWorkflowRevisionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revisions.delete("workflow_id", "revision_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**revision_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Revisions.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.revisions.<a href="/src/api/resources/revisions/client/Client.ts">list</a>(workflow_id) -> Scout.SrcHandlersListWorkflowRevisionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all app revisions in the organization
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revisions.list("workflow_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Revisions.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.revisions.<a href="/src/api/resources/revisions/client/Client.ts">update</a>(workflow_id, revision_id) -> Scout.SrcHandlersPromoteWorkflowRevisionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revisions.update("workflow_id", "revision_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**revision_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Revisions.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Environments
<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">list</a>(workflow_id) -> Scout.SrcHandlersGetWorkflowEnvironmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all environments for a workflow in the organization
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.list("workflow_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">update</a>(workflow_id, environment_id, { ...params }) -> Scout.SrcHandlersUpdateWorkflowEnvironmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update deployments within a workflow environment
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.update("workflow_id", "environment_id", {
    name: "name",
    description: "description",
    deployments: [{
            revision_lookup: "latest"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workflow_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**environment_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.UpdateRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Usage
<details><summary><code>client.usage.<a href="/src/api/resources/usage/client/Client.ts">get</a>({ ...params }) -> Scout.ResponseModelUsage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.usage.get({
    start_date: "start_date",
    end_date: "end_date"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.UsageGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Usage.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## WorkflowLogs
<details><summary><code>client.workflowLogs.<a href="/src/api/resources/workflowLogs/client/Client.ts">listLogs</a>({ ...params }) -> core.Stream&lt;Scout.WorkflowLogsListLogsResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.workflowLogs.listLogs({
    workflow_id: "workflow_id",
    start_date: "start_date",
    end_date: "end_date",
    limit: 1,
    session_id: "session_id",
    status: "status",
    cursor: "cursor",
    summary_only: true
});
for await (const item of response) {
    console.log(item);
}

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.WorkflowLogsListLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowLogs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workflowLogs.<a href="/src/api/resources/workflowLogs/client/Client.ts">getDetails</a>({ ...params }) -> Scout.RunLog</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get full log details for a specific workflow run.
Requires either session_id or workflow_run_id to identify the log.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowLogs.getDetails({
    workflow_id: "workflow_id",
    session_id: "session_id",
    workflow_run_id: "workflow_run_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.WorkflowLogsGetDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowLogs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Copilots
<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">list</a>({ ...params }) -> Scout.SrcHandlersListCopilotsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all copilots in the organization
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.list({
    sort: "sort",
    direction: "direction",
    start_at: "start_at",
    limit: 1,
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.CopilotsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Copilots.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">create</a>({ ...params }) -> Scout.SrcHandlersCreateCopilotResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.create({});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.CopilotConfig` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Copilots.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">get</a>(copilot_id) -> Scout.SrcHandlersGetCopilotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch copilot configuration by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.get("copilot_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**copilot_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Copilots.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">update</a>(copilot_id, { ...params }) -> Scout.SrcHandlersUpdateCopilotResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.update("copilot_id", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**copilot_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.CopilotConfig` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Copilots.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">delete</a>(copilot_id) -> Scout.SrcHandlersDeleteCopilotResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilots.delete("copilot_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**copilot_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Copilots.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Triggers
<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">list</a>({ ...params }) -> Scout.ListTriggersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

All apis and effects are injected into every endpoint
via request.context. The request_context() utility can be used
to get Intellisense type-completion
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.list({
    action_type: "workflow.execute",
    workflow_id: "workflow_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.TriggersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">create</a>({ ...params }) -> Scout.SrcAppHttpRoutesTriggerCreateTriggerResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.create({
    action: {
        action_type: "agent.execute",
        agent_id: "agent_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.TriggersCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">update</a>(trigger_id, { ...params }) -> Scout.UpdateTriggerResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.update("trigger_id", {
    action: {
        action_type: "agent.execute",
        agent_id: "agent_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**trigger_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.TriggersUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">delete</a>(trigger_id) -> Scout.DeleteTriggerResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.delete("trigger_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**trigger_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">executeSlack</a>() -> Scout.TriggersExecuteSlackResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.executeSlack();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">executeCron</a>() -> Scout.ExecuteTriggerResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.executeCron();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">updateCronAuthHeaders</a>({ ...params }) -> Scout.UpdateCronAuthResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update Cloud Scheduler job Authorization headers for organizations.
Lists all Cloud Scheduler jobs and updates those matching the trigger pattern.

Args:
    dry_run: If True, only shows what would be updated without making changes
    test_org_id: If provided, only processes jobs for this specific organization ID

Only accessible to Scout internal organizations for security.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.updateCronAuthHeaders({
    dry_run: true,
    test_org_id: "test_org_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.TriggersUpdateCronAuthHeadersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Integrations
<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">list</a>(service, { ...params }) -> Scout.Integration[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all OAuth integrations for the organization

If service is 'all', returns integrations for all services.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.list("service", {
    fetch_icons: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**service:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.IntegrationsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Integrations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">listChannels</a>(team_id) -> Scout.Channel[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all channels for a specific Slack workspace
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.listChannels("team_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**team_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Integrations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations
<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">deleteIntegration</a>(integration_type, integration_id) -> Record&lt;string, string&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.deleteIntegration("integration_type", "integration_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**integration_type:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**integration_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Collections
<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">list</a>({ ...params }) -> Scout.SrcAppHttpRoutesCollectionGetCollectionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.list({
    start_at: "start_at",
    limit: 1,
    query: "query",
    tags: "tags",
    sort: "sort",
    drive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.CollectionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">create</a>({ ...params }) -> Scout.Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.create({});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.CollectionConfig` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">get</a>(collection_id) -> Scout.SrcAppHttpRoutesCollectionGetCollectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.get("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">update</a>(collection_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionUpdateCollectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.update("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.CollectionConfigUpdate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">delete</a>(collection_id) -> Scout.SrcAppHttpRoutesCollectionDeleteCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Queue collection deletion and return immediately.
Deletion happens asynchronously in background.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.delete("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">listSyncs</a>(collection_id, table_id) -> Scout.ResponseModel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Sources by Destination, specifically given a collection and table
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.listSyncs("collection_id", "table_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">getViews</a>(collection_id) -> Scout.ViewStateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.getViews("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">updateViews</a>(collection_id, { ...params }) -> Scout.ViewStateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.updateViews("collection_id", {
    view_state: {
        organization_id: "organization_id",
        collection_id: "collection_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.UpdateViewStateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">deleteViews</a>(collection_id) -> Scout.ViewStateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.deleteViews("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">listIndividualViews</a>(collection_id) -> Scout.ViewListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.listIndividualViews("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">createView</a>(collection_id, { ...params }) -> Scout.ViewResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.createView("collection_id", {
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.CreateViewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">updateView</a>(collection_id, view_id, { ...params }) -> Scout.ViewResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.updateView("collection_id", "view_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**view_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.UpdateViewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">deleteView</a>(collection_id, view_id) -> Scout.DeleteViewResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.collections.deleteView("collection_id", "view_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**view_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Collections.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tables
<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">list</a>(collection_id) -> Scout.SrcAppHttpRoutesCollectionGetTablesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.list("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">create</a>(collection_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionCreateTableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.create("collection_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.TableConfigInput` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">get</a>(collection_id, table_id) -> Scout.SrcAppHttpRoutesCollectionGetTableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.get("collection_id", "table_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">update</a>(collection_id, table_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionUpdateTableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.update("collection_id", "table_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.TableData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">delete</a>(collection_id, table_id) -> Scout.SrcAppHttpRoutesCollectionDeleteTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a table given a collection_id and table_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.delete("collection_id", "table_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">getSchema</a>(collection_id, table_id) -> Scout.SchemaResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.getSchema("collection_id", "table_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">sync</a>(collection_id, table_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionSyncTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sync a table with a list of documents.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.sync("collection_id", "table_id", [{
        "key": "value"
    }]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Record<string, unknown>[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tables.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Documents
<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">list</a>(collection_id, table_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionGetDocumentsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.list("collection_id", "table_id", {
    limit: 1,
    cursor: "cursor",
    query: "query",
    offset: 1,
    sort_by: "sort_by",
    filter_column: "filter_column",
    filter_value: "filter_value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.DocumentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">create</a>(collection_id, table_id, { ...params }) -> Scout.DocumentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.create("collection_id", "table_id", {
    job_id: "job_id",
    sync_id: "sync_id",
    await_completion: true,
    mode: "mode",
    merge_fields: true,
    body: {
        "key": true
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.DocumentsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">updateBatch</a>(collection_id, table_id, { ...params }) -> Scout.DocumentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.updateBatch("collection_id", "table_id", {
    job_id: "job_id",
    sync_id: "sync_id",
    await_completion: true,
    mode: "mode",
    merge_fields: true,
    body: {
        "key": true
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.DocumentsUpdateBatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">get</a>(collection_id, table_id, document_id) -> Scout.SrcAppHttpRoutesCollectionGetDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Route handler for getting a document
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.get("collection_id", "table_id", "document_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**document_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">update</a>(collection_id, table_id, document_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionUpdateDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Route handler for updating a document
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.update("collection_id", "table_id", "document_id", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**document_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.DocumentsUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">delete</a>(collection_id, table_id, document_id) -> Scout.SrcAppHttpRoutesCollectionDeleteDocumentsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.delete("collection_id", "table_id", "document_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**document_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">deleteBatch</a>(collection_id, table_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionDeleteDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete documents given a list of document ids.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.deleteBatch("collection_id", "table_id", ["string"]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**table_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `string[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Sources
<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">list</a>() -> Scout.SrcAppHttpRoutesCollectionListSourceArchetypesResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Syncs
<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">list</a>() -> Scout.SrcAppHttpRoutesCollectionGetSyncsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syncs.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Syncs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">create</a>({ ...params }) -> Scout.SrcAppHttpRoutesCollectionCreateSyncResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syncs.create({
    sync_config: {
        source_settings: {
            source_archetype_id: "com.google.drive"
        },
        destination: {
            destination_type: "collections.v2",
            collection_id: "collection_id",
            table_id: "table_id"
        },
        mapping: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.SrcAppHttpRoutesCollectionCreateSyncRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Syncs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">get</a>(sync_id) -> Scout.SrcAppHttpRoutesCollectionGetSyncResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syncs.get("sync_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sync_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Syncs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">update</a>(sync_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionUpdateSyncResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syncs.update("sync_id", {
    sync_config: {
        source_settings: {
            source_archetype_id: "com.google.drive"
        },
        destination: {
            destination_type: "collections.v2",
            collection_id: "collection_id",
            table_id: "table_id"
        },
        mapping: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sync_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Scout.RequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Syncs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">delete</a>(sync_id) -> Scout.SrcAppHttpRoutesCollectionDeleteSyncResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syncs.delete("sync_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sync_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Syncs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">execute</a>(sync_id) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syncs.execute("sync_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sync_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Syncs.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Drive
<details><summary><code>client.drive.<a href="/src/api/resources/drive/client/Client.ts">upload</a>({ ...params }) -> Scout.SrcAppHttpRoutesDriveSdkDriveUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload one or more files to Drive.

- `files`: the file uploads (multipart)
- `metadata`: a JSON string containing a list of per-file metadata dicts,
  positionally aligned with `files`. Each dict may contain:
    - `path`   — fully qualified destination path (takes precedence)
    - `folder` — destination folder
    - `name`   — destination filename

Resolution logic for each file at index i:
- If path is provided, use it as the fully qualified path
- Else if folder and name are provided, combine as {folder}/{name}
- Else if folder is provided, combine as {folder}/{upload_filename}
- Else if name is provided, use /{name} (root)
- Else fall back to None (domain default behavior)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drive.upload({
    files: [fs.createReadStream("/path/to/your/file")]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.BodySdkDriveUploadDriveUploadPost` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Drive.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drive.<a href="/src/api/resources/drive/client/Client.ts">download</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download a single file from Drive.

Provide one of the following to identify the file:
- `path`: fully qualified path (e.g., '/foo/bar/hello.txt')
- `name` + `folder`: file name within a specific folder (e.g., name='hello.txt', folder='/foo/bar')

Returns the file content as a streaming binary response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drive.download();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Scout.DriveDownloadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Drive.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

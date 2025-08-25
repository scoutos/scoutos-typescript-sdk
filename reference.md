# Reference

<details><summary><code>client.<a href="/src/Client.ts">expireBlobsExpireBlobsPost</a>() -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.expireBlobsExpireBlobsPost();
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

**requestOptions:** `ScoutClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

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
    body: {},
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
await client.workflows.list();
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
    body: {},
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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">runStream</a>(workflow_id, { ...params }) -> core.Stream<Scout.WorkflowRunStreamResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.workflows.runStream("workflow_id", {});
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
await client.workflows.run("workflow_id", {});
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
    workflow_config: {},
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
    deployments: [
        {
            revision_lookup: "latest",
        },
    ],
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

## Revisions

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
await client.usage.get();
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

<details><summary><code>client.workflowLogs.<a href="/src/api/resources/workflowLogs/client/Client.ts">listLogs</a>({ ...params }) -> core.Stream<Scout.WorkflowLogsListLogsResponse></code></summary>
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
await client.copilots.list();
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
await client.triggers.list();
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
        action_type: "source.sync",
        sync_id: "sync_id",
    },
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
        action_type: "source.sync",
        sync_id: "sync_id",
    },
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
await client.triggers.updateCronAuthHeaders();
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
await client.integrations.list("service");
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

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">deleteIntegration</a>(integration_type, integration_id) -> Record<string, string></code></summary>
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
await client.collections.list();
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">create</a>({ ...params }) -> Scout.SrcAppHttpRoutesCollectionCreateCollectionResponse</code></summary>
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
await client.collections.update("collection_id", {});
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">delete</a>(collection_id) -> Scout.SrcAppHttpRoutesCollectionDeleteCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a collection given a collection_id.

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
        collection_id: "collection_id",
    },
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
    name: "name",
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
await client.tables.sync("collection_id", "table_id", [
    {
        key: "value",
    },
]);
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
await client.documents.list("collection_id", "table_id");
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
    body: {
        key: true,
    },
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
    body: {
        key: true,
    },
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

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">update</a>(collection_id, document_id, table_id, { ...params }) -> Scout.SrcAppHttpRoutesCollectionUpdateDocumentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.update("collection_id", "document_id", "table_id", {});
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

**document_id:** `string`

</dd>
</dl>

<dl>
<dd>

**table_id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Record<string, Scout.DocumentsUpdateRequestValue | undefined>`

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

<details><summary><code>client.syncs.<a href="/src/api/resources/syncs/client/Client.ts">list</a>(collection_id, table_id) -> Scout.SrcAppHttpRoutesCollectionListCollectionSyncsResponseModel</code></summary>
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
await client.syncs.list("collection_id", "table_id");
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
            source_archetype_id: "com.google.drive",
        },
        destination: {
            destination_type: "collections.v2",
            collection_id: "collection_id",
            table_id: "table_id",
        },
        mapping: {},
    },
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
            source_archetype_id: "com.google.drive",
        },
        destination: {
            destination_type: "collections.v2",
            collection_id: "collection_id",
            table_id: "table_id",
        },
        mapping: {},
    },
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

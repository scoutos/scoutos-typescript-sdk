# Reference

## Workflows

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">list</a>({ ...params }) -> Scout.AppsServiceHandlersListWorkflowsResponse</code></summary>
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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">create</a>({ ...params }) -> Scout.AppsServiceHandlersCreateWorkflowResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.create({});
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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">get</a>(workflow_id) -> Scout.AppsServiceHandlersGetWorkflowResponse</code></summary>
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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">update</a>(workflow_id, { ...params }) -> Scout.AppsServiceHandlersUpdateWorkflowResponse</code></summary>
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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">delete</a>(workflow_id) -> Scout.AppsServiceHandlersDeleteWorkflowResponse</code></summary>
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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">runStream</a>(workflow_id, { ...params }) -> core.Stream<Scout.WorkflowRunEvent></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.runStream("string", {
    environment: "string",
    revision_id: "string",
    session_id: "string",
    inputs: {
        string: true,
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

## Environments

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">list</a>(workflow_id) -> Scout.AppsServiceHandlersGetWorkflowEnvironmentsResponse</code></summary>
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

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">update</a>(workflow_id, environment_id, { ...params }) -> Scout.AppsServiceHandlersUpdateWorkflowEnvironmentResponse</code></summary>
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
            revision_lookup: Scout.EnvironmentDeploymentConfigRevisionLookup.Latest,
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

<details><summary><code>client.revisions.<a href="/src/api/resources/revisions/client/Client.ts">list</a>(workflow_id) -> Scout.AppsServiceHandlersListWorkflowRevisionsResponse</code></summary>
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

<details><summary><code>client.revisions.<a href="/src/api/resources/revisions/client/Client.ts">update</a>(workflow_id, revision_id) -> Scout.AppsServiceHandlersPromoteWorkflowRevisionResponse</code></summary>
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

<details><summary><code>client.revisions.<a href="/src/api/resources/revisions/client/Client.ts">delete</a>(workflow_id, revision_id) -> Scout.AppsServiceHandlersDeleteWorkflowRevisionResponse</code></summary>
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

<details><summary><code>client.workflowLogs.<a href="/src/api/resources/workflowLogs/client/Client.ts">get</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowLogs.get({
    workflow_id: "workflow_id",
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

**request:** `Scout.WorkflowLogsGetRequest`

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

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">list</a>({ ...params }) -> Scout.AppsServiceHandlersListCopilotsResponse</code></summary>
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

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">create</a>({ ...params }) -> Scout.AppsServiceHandlersCreateCopilotResponse</code></summary>
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

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">get</a>(copilot_id) -> Scout.AppsServiceHandlersGetCopilotResponse</code></summary>
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

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">update</a>(copilot_id, { ...params }) -> Scout.AppsServiceHandlersUpdateCopilotResponse</code></summary>
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

<details><summary><code>client.copilots.<a href="/src/api/resources/copilots/client/Client.ts">delete</a>(copilot_id) -> Scout.AppsServiceHandlersDeleteCopilotResponse</code></summary>
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

## Collections

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">get</a>(collection_id) -> Scout.EvalServiceHandlersGetCollectionResponse</code></summary>
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">create</a>({ ...params }) -> Scout.EvalServiceHandlersCreateCollectionResponse</code></summary>
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">update</a>(collection_id, { ...params }) -> Scout.EvalServiceHandlersUpdateCollectionResponse</code></summary>
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

<details><summary><code>client.collections.<a href="/src/api/resources/collections/client/Client.ts">delete</a>(collection_id) -> Scout.EvalServiceHandlersDeleteCollectionResponse</code></summary>
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

## Tables

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">get</a>(collection_id, table_id) -> Scout.EvalServiceHandlersGetTableResponse</code></summary>
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

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">create</a>(collection_id, { ...params }) -> Scout.EvalServiceHandlersCreateTableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.create("collection_id", {});
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

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">update</a>(collection_id, table_id, { ...params }) -> Scout.EvalServiceHandlersUpdateTableResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tables.update("collection_id", "table_id", {});
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

<details><summary><code>client.tables.<a href="/src/api/resources/tables/client/Client.ts">delete</a>(collection_id, table_id) -> Scout.EvalServiceHandlersDeleteTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a table given a table_id.

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

## Documents

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">get</a>(collection_id, table_id, document_id) -> Scout.EvalServiceHandlersGetDocumentResponse</code></summary>
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

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">create</a>(collection_id, table_id, { ...params }) -> Scout.EvalServiceHandlersCreateDocumentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.create("collection_id", "table_id", {
    key: true,
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

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">update</a>(collection_id, document_id, table_id, { ...params }) -> Scout.EvalServiceHandlersUpdateDocumentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.update("collection_id", "document_id", "table_id", {
    key: true,
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

**request:** `Record<string, Scout.DocumentsUpdateRequestValue>`

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

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">delete</a>(collection_id, table_id, document_id) -> Scout.EvalServiceHandlersDeleteDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a document given a document_id.

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

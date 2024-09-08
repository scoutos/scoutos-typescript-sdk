# Reference

## Workflows

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">executeStream</a>(workflowId, { ...params }) -> core.Stream<Scout.WorkflowRunResponseStreaming></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.executeStream("string", {
    revisionId: "string",
    sessionId: "string",
    input: {
        string: 1,
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

**workflowId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Scout.WorkflowsExecuteStreamRequest`

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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">execute</a>(workflowId, { ...params }) -> Scout.WorkflowRunResponseBatch</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.execute("workflow_id", {
    input: {
        key: 1,
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

**workflowId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Scout.WorkflowsExecuteRequest`

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

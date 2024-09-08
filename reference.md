# Reference

## Workflows

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">runStream</a>(appId, { ...params }) -> core.Stream<Scout.WorkflowRunResponseStreaming></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.runStream("string", {
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

**appId:** `string`

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

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">run</a>(appId, { ...params }) -> Scout.WorkflowRunResponseBatch</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.run("app_id", {
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

**appId:** `string`

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

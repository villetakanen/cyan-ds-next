---
name: 'cn-share-button'
noun: 'share'
---

# cn-share-button

## Usage

<div class="flex">
  <div class="border p-1">
    <cn-share-button></cn-share-button>
  </div>
</div>

```html
<cn-share-button
  url="https://example.com"
  title="Example"
  label="Share"
  noun="fox"
></cn-share-button>
```

### Properties / Attributes

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| `url` | The URL to share. | `string` | `window.location.href` |
| `title` | The title of the content to share. | `string` | `document.title` |
| `label` | The label to display on the button. | `string` | `Share` |
| `noun` | The icon to display on the button. | `string` | inherent |

### Events

The `cn-lightmode-button`n` component emits the following events:

| Event | Description |
| --- | --- |
| `Copy` | Emitted when the content is copied to the clipboard. |



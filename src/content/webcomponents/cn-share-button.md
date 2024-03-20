---
name: 'cn-share-button'
noun: 'share'
---

# cn-share-button

A button with integrated sharing functionality. On click, the button checks if the browser
supports the Web Share API and uses it if available. If not, it falls back to a simple
copy-to-clipboard functionality.

A `copy` event is emitted when the content is copied to the clipboard, for App integration.

## Usage

<div class="flex">
  <div class="border p-1">
    <cn-share-button label="This is the label!"></cn-share-button>
  </div>
</div>

```html
<cn-share-button
  url="https://example.com"
  title="Example"
  label="This is the label!"
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



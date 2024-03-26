---
name: "cn-bubble"
noun: "card"
---

The `cn-bubble` is a web component that shows a speech bubble used in a discussion.

### Attributes

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| `reply` | Makes the bubble to look like a reply to the discussion | Boolean | `false` |

### Slots

| Slot | Description |
| --- | --- |
| `meta` | The meta information of the bubble, like the author and like button |
| \[default\] | The content of the bubble, like the text or image |

### Example

<div class="flex flex-column p-1">
  <cn-bubble>
    <div slot="meta">Alice</div>
    <div>Hi Bob, how are you?</div>
  </cn-bubble>
  <div class="flex">
    <cn-bubble reply class="flex-grow">
      <div slot="meta">Bob</div>
      <div>Hi Alice, I'm fine, thank you!</div>
    </cn-bubble>
    <cn-avatar src="/images/lego-1.png" nick="Bob"></cn-avatar-button>
  </div>
</div>
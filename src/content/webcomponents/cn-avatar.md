---
name: 'cn-avatar'
noun: 'avatar'
---

The `cn-avatar` is a web component that shows the user Avatar image in a circular shape. 
An image can be provided as a source or the component will show a default image based on 
the user's nick.

The Avatar-noun will be shown if neither, nick nor src is provided.

### Example

<div class="flex">
  <div class="p-1">
    <cn-avatar src="/images/lego-1.png" nick="Bob"></cn-avatar-button>
  </div>
  <div class="elevation-2 p-1">
    <cn-avatar nick="Alice"></cn-avatar-button>
  </div>
  <div class="elevation-1 p-1 light">
    <cn-avatar></cn-avatar-button>
  </div>
</div>
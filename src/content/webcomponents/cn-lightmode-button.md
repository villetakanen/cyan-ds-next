---
name: 'cn-lightmode-button'
---

<h1 class="small">cn-lightmode-button</h1>

The `cn-lightmode-button` component is a microinteractive toggle button that is used to switch between light
and dark mode. It is a simple button that emits a `change` event when clicked.

<div class="flex">
  <div class="border p-1">
    <cn-lightmode-button></cn-lightmode-button>
  </div>
</div>

The button adds a `light` or `dark` class to the `body` element when clicked, which triggers the theme
variables to change. The button also emits a `light` or `dark` event when clicked, which can be used to
trigger other actions – like saving user preferences – in the application.

### Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `string` | user agent defined | The current mode of the button. This can be either `light` or `dark` |

### Events

The `cn-lightmode-button`n` component emits the following events:

| Event | Description |
| --- | --- | --- |
| `light` | Emitted when the button is in light mode |
| `dark` | Emitted when the button is in dark mode |
---
name: 'cn-app-menu-button'
---

<h1 class="small">cn-app-menu-button</h1>

The `cn-app-menu-button` component is a microinteractive toggle button that is used to open
and close the application menu on medium and small screens.

<div class="flex">
  <div class="elevation-1 p-1">
    <cn-app-menu-button></cn-app-menu-button>
  </div>
  <div class="elevation-1 p-1 light">
    <cn-app-menu-button aria-expanded="true"></cn-app-menu-button>
  </div>
</div>

### Usage

To place the menu button in the top left corner of the screen, use the following code. Additionally, 
it migh make sense to add a `hide-on-desktop` class to the button to hide it on large screens.

```css
.appMenuButton {
  position: fixed;
  top: var(--cn-grid-size);
  left: calc(var(--cn-grid-size) * 1.5);
}
```

### Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaExpanded` | `boolean` | `false` | The aria-expanded attribute value, used to toggle the menu |
| `ariaLabel` | `string` | `Menu` | The aria-label attribute value, used to describe the button |
| `ariaControls` | `string` | `#cn-tray` | The aria-controls attribute value, used to link the button with the menu |

### Events

The `cn-app-menu-button` component emits the following events:

| Event | Detail | Description |
| --- | --- | --- |
| `change` | `boolean` matching the new value of `ariaExpanded` | The change event is emitted when the button is clicked and the aria-expanded attribute value changes |
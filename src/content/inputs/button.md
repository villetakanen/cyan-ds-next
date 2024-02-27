---
name: "button"
noun: "gamepad"
---

We provide button styling for HTML `<button>` and `<a class="button">` elements.

A button has three substyles: [default], `.text` and `.call-to-action`. All three styles support styled pseudo-classes for `:active`, `:hover`, and `:disabled`

## Examples

### Buttons

| Demo | Code | Description |
| --- | --- | --- |
| <button>Default</button> | `<button>Default</button>` | A default button |
| <button class="text">Text</button> | `<button class="text">Text</button>` | A text button |
| <button class="call-to-action">Call to Action</button> | `<button class="call-to-action">Call to Action</button>` | A call to action button |

### Links

| Demo | Code | Description |
| --- | --- | --- |
| <a class="button">Default</a> | `<a class="button">Default</a>` | A default link button |
| <a class="button text">Text</a> | `<a class="button text">Text</a>` | A text link button |
| <a class="button call-to-action">Call to Action</a> | `<a class="button call-to-action">Call to Action</a>` | A call to action link button |


### Using `cn-icon` Icons with Buttons

<div>
<button class="button">
  <cn-icon noun="gamepad"></cn-icon>
  Example
</button>
</div>

```html
<button class="[ | text | call-to-action ]">
  <cn-icon noun="gamepad"></cn-icon>
  Example
</button>
```






   
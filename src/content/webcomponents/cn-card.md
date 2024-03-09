---
name: 'cn-card'
---

# cn-card

A card is a fixed container for a piece of content. It can be used to display a
small amount of information, or to highlight a piece of content.

<section class="flex flex-no-wrap">
  <cn-card 
    title="101"
    description="A Card"
    noun="fox">
</cn-card>
        <cn-card
          title="102"
          elevation="2"
          noun="mekanismi"
          snippet="A Second Card"></cn-card>
        <cn-card 
          title="203"
          elevation="3"
          noun="card"
          snippet="A Third oOne"></cn-card>
      </section>


<div class="flex border p-1">
  <cn-card>
    <h4 slot="title">Card Title</h4>
    <p>Here is some content for the card.</p>
  </cn-card>
</div>

### Elevation

<div class="item-grid border p-1">
  <cn-card elevation="0">
    <h4 slot="title">0</h4>
    <p>Elevation 0</p>
  </cn-card>
    <cn-card elevation="1">
        <h4 slot="title">1</h4>
        <p>Elevation 1</p>
    </cn-card>
    <cn-card elevation="2">
        <h4 slot="title">2</h4>
        <p>Elevation 2</p>
    </cn-card>
    <cn-card elevation="3">
        <h4 slot="title">3</h4>
        <p>Elevation 3</p>
    </cn-card>
    <cn-card elevation="4">
        <h4 slot="title">4</h4>
        <p>Elevation 4</p>
    </cn-card>
</div>
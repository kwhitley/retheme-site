<script>
  export let type = "question"
</script>

<!-- MARKUP -->
<div class={type}>
  <span>{type}</span>
  <span>
    <slot />
  </span>
</div>

<!-- STYLES -->
<style lang="scss">
  div {
    display: flex;
    flex-flow: row wrap;

    &.answer:not(:last-child) {
      border-bottom: 1px dotted #ccc;
      padding-bottom: 1em;
      margin: 0.5em 0 1em;
    }

    &:not(.answer) span:nth-child(2) {
      font-weight: normal;
    }
  }

  span {
    flex: 1;
    display: inline-block;
    line-height: 1.3em;
    font-weight: lighter;
  }

  span:first-child {
    flex: 0 7em;
    text-transform: uppercase;
    font-size: 0.7em;
    opacity: 0.5;
    text-align: right;
    padding-right: 1em;
    padding-top: 0.3em;
    font-weight: normal;
  }
</style>

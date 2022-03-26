<script>
  import Link from './Link.svelte'
  import { page } from '$app/stores'
  export let active = ''
</script>

<style lang="scss">
  .outer {
    display: table;
    text-align: left;
  }

  .inner h2 {
    font-size: clamp(1.6rem, 3vmax, 2.5rem);
    margin: 0 0 0.4em 1em;
    transition: opacity 0.3s ease;
    white-space: normal;
    opacity: 0.3;
    position: relative;

    &:before {
      content: '>';
      position: absolute;
      white-space: nowrap;
      vertical-align: top;
      right: calc(100% + 0.5em);
    }


    &.active, &:hover {
      opacity: 1;
    }
  }
</style>

<h1>Retheme.org</h1>

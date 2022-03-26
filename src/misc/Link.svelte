<script>
  import { page } from '$app/stores'
  export let href
  export let exact = false

  $: active = exact
              ? $page.url.pathname === href
              : $page.url.pathname.indexOf(href) === 0
</script>

<style lang="scss">
  a {
    color: var(--accent-color);

    &:hover {
      transform: scale(1.03);
    }
  }
</style>

<a href={href} class:active>
  <slot />
</a>

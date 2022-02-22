<script>
  import { page } from '$app/stores'
  export let href
  export let exact = false

  $: active = exact
              ? $page.url.pathname === href
              : $page.url.pathname.indexOf(href) === 0
</script>

<a href={href} class:active>
  <slot />
</a>

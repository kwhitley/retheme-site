<script>
  import { fade, fly } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:fly="{{ x: 500, duration: 500, delay: 300 }}"
    out:fly="{{ x: -500, duration: 400 }}"
    >
    <slot/>
  </div>
{/key}

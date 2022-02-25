<script>
  import { fade, fly } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:fly="{{ x: -500, duration: 250, delay: 250 }}"
    out:fly="{{ y: 500, duration: 250 }}"
    >
    <slot/>
  </div>
{/key}

<script>
  import { fade, fly } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:fly="{{ x: -500, duration: 100, delay: 300 }}"
    out:fly="{{ y: 500, duration: 300 }}"
    >
    <slot/>
  </div>
{/key}

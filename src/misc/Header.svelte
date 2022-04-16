<script>
  import ChromeLink from '~/misc/ChromeLink.svelte'
</script>

<style lang="scss">
  header {
    font-size: clamp(3.3rem, 7vw, 7rem);
    margin-bottom: 2.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  small {
    display: block;
    letter-spacing: 0em;;
    font-size: 0.3em;
    text-transform: uppercase;
    padding-top: 0.4em;
    border-top: 1px solid var(--foreground-color);
    flex: 1 100%;
    text-align: left;
  }
</style>

<header>
  <h1>Retheme</h1>
  <ChromeLink />
  <small>= the internet without ads</small>
</header>

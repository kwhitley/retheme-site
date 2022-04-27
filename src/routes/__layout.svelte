<script>
  import Header from '~/misc/Header.svelte'
  import SocialLinks from '~/misc/SocialLinks.svelte'
  import Transition from '~/misc/Transition.svelte'
  import '../app.scss'
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href="/favicon.png" />
  <title>Retheme.org - your window to a better internet</title>
  <meta name="description" content="Retheme.org has one goal: restyle the internet to be consumer-friendly, rather than ad-friendly.  Download the Firefox or Chrome extension today to get started!" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <html lang="en" />
</svelte:head>

<main class="layout">
  <Header />

  <div>
    <slot />
  </div>

  <SocialLinks />
</main>

<style lang="scss">
  .layout {
    padding: var(--padding) calc(var(--padding) / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 2 * var(--padding));
  }

  div {
    flex: 1;
    display: flex;
    flex-flow: column;
  }
</style>

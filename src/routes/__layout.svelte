<script>
  import Header from '~/misc/Header.svelte'
  import SocialLinks from '~/misc/SocialLinks.svelte'
  import Transition from '~/misc/Transition.svelte'
  import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition'
  import '../app.scss'

  $: key = $page.url.pathname
  $: console.log({ key })
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href="/favicon.png" />
  <title>Retheme.org - your window to a better internet</title>
  <meta name="description" content="Retheme.org has one goal: restyle the internet to be consumer-friendly, rather than ad-friendly." />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <html lang="en" />
</svelte:head>

<style lang="scss">
  main {
    --padding: 5em;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    margin: 0 1em;
    position: relative;
    padding: 0 var(--padding);
    opacity: 1;
    text-align: center;

    @media (max-width: 50em) {
      --padding: 7vw;
    }

    section {
      padding: 2em 0 3em;
      height: auto;
      overflow: hidden;
      display: block;
      text-align: left;
      border-bottom: 1px solid var(--foreground-color);

      &:empty {
        outline: none;
        height: 0;
        border-bottom: none;
      }
    }
  }
</style>

<main>
  <Header />

  <Transition refresh={key}>
    <section>
      <slot />
    </section>
  </Transition>

  <SocialLinks />
</main>

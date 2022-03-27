<script>
  import { page } from '$app/stores'
  import Header from '~/misc/Header.svelte'
  import SocialLinks from '~/misc/SocialLinks.svelte'
  import Transition from '~/misc/Transition.svelte'
  import '../app.scss'

  $: key = $page.url.pathname
  $: console.log({ key })
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

  <Transition refresh={key}>
    <section>
      <slot />
    </section>
  </Transition>

  <SocialLinks />
</main>

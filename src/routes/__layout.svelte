<script>
  import Header from '~/layout/Header.svelte'
  import Title from '~/layout/Title.svelte'
  import SocialLinks from '~/layout/SocialLinks.svelte'
  import '../app.scss'
</script>

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
      padding: 3em 0 3em;
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
  <Title />

  <section>
    <slot />
  </section>

  <SocialLinks />
</main>

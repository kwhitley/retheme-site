<script>
  import QA from '../misc/QA.svelte'
  import Bullets from '../misc/Bullets.md'
  import Card from '../misc/Card.svelte'
  import FAQ from '../misc/FAQ.md'
</script>

<style lang="scss">
  main {
    display: flex;
    flex-flow: column;

    > * {
      margin-bottom: 3em;
    }
  }
</style>

<main>
  <section>
    <Card>
      <Bullets />
    </Card>
  </section>

  <section>
    <FAQ />
  </section>
</main>

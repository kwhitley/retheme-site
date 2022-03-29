<script>
  import Bullets from '../misc/Bullets.svelte'
  import Card from '../misc/Card.svelte'
  import Comparison from '../misc/Comparison.svelte'
  import FAQ from '../misc/FAQ.svelte'
  import '../app.scss'

  // export let domains
</script>

<main class="page">
  <section>
    <Card>
      <Bullets />
    </Card>
  </section>

  <Comparison />

  <section>
    <FAQ />
  </section>
</main>

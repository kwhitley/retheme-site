<script>
  import Bullets from '../misc/Bullets.svelte'
  import Card from '../misc/Card.svelte'
  import Comparison from '../misc/Comparison.svelte'
  import FAQ from '../misc/FAQ.svelte'
  import MessageToUsers from '../misc/MessageToUsers.svelte'
  import Why from '../misc/Why.svelte'

  // export let domains
</script>

<main class="page">
  <MessageToUsers />

  <section class="hide-for-users">
    <Card>
      <Bullets />
    </Card>
  </section>

  <Comparison />

  <Why />

  <section>
    <FAQ />
  </section>
</main>

<script>
  import { onInterval } from '~/utils/onInterval'

  const INTERVAL = 1000 * 60 * 5 // 5 minutes

  let daily = '???'
  let weekly = '???'
  let ratio = '???'

  $: digitsWeekly = weekly.toString().split('')
  $: digitsRatio = ratio.toString().split('').concat(['%'])

  const getUsers = () => fetch('https://api.retheme.org/v1/user-stats')
                          .then(r => r.json())
                          .then(res => {
                            daily = res.users?.daily
                            weekly = res.users?.weekly
                            ratio = Math.round(daily / weekly * 100)
                          })

  onInterval(getUsers, INTERVAL)
</script>

<main>
  <div class="top"></div>

  <section>
    <h3>Weekly Users</h3>
    <h1 class="counter">
      {#each digitsWeekly as digit}
        <span class="digit">{digit}</span>
      {/each}
    </h1>
  </section>

  <section class="ratio">
    <h3>Active Last 24hr</h3>
    <h1 class="counter">
      {#each digitsRatio as digit}
        <span class="digit">{digit}</span>
      {/each}
    </h1>
  </section>

  <div class="bottom"></div>
</main>

<style lang="scss">
  .counter {
    font-size: 1em;
  }

  main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 100%;
    flex: 1;
    gap: 4em;
  }

  section {
    text-align: center;
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    font-size: clamp(11rem, 30vw, 15rem);
    flex: 1;
  }

  .ratio {
    font-size: clamp(9rem, 20vw, 12rem);
  }

  .bottom {
    flex: 1;
  }

  .top {
    flex: 0.1;
  }

  h1 {
    // letter-spacing: -0.05em;
    line-height: 0.9em;
  }

  h3 {
    font-size: 0.13em;
    line-height: 0;
  }

  span {
    --radius: 0.05em;
    border-radius: var(--radius);
    border: 1px solid rgba(255, 255, 255, 0.7);
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    display: inline-block;
    padding: 0.08em 0 0.05em;

    &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: -1;
    }

    &:after {
      background: none;
      z-index: 1;
      border-top: 1px solid rgba(0, 0, 0, 0.4);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 20%);
    }
  }
</style>

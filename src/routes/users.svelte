<script>
  import { onInterval } from '~/utils/onInterval'

  const INTERVAL = 1000 * 60 * 5 // 5 minutes

  let daily = '???'
  let weekly = '???'

  $: digitsDaily = daily.toString().split('')
  $: digitsWeekly = weekly.toString().split('')

  const getUsers = () => fetch('https://api.retheme.org/v1/user-stats')
                          .then(r => r.json())
                          .then(res => {
                            daily = res.users?.daily
                            weekly = res.users?.weekly
                          })

  onInterval(getUsers, INTERVAL)
</script>

<main>
  <section>
    <h3>Weekly Users</h3>
    <h1 class="counter">
      {#each digitsWeekly as digit}
        <span class="digit">{digit}</span>
      {/each}
    </h1>
  </section>

  <section>
    <h3>Last 24hr</h3>
    <h1 class="counter">
      {#each digitsDaily as digit}
        <span class="digit">{digit}</span>
      {/each}
    </h1>
  </section>

  <div></div>
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
    gap: 3em;
  }

  section {
    text-align: center;
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    font-size: clamp(4rem, 35vw, 15rem);
    flex: 1;
    // padding: 0.1em 0;
  }

  div {
    flex: 0.5;
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

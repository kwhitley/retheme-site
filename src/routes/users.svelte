<script>
  import { onInterval } from '~/utils/onInterval'

  const INTERVAL = 1000 * 60 * 5 // 5 minutes

  let counter = '?'
  $: digits = counter.toString().split('')

  const getUsers = () => fetch('https://api.retheme.org/v1/weekly-users')
                          .then(r => r.json())
                          .then(res => {
                            counter = res.users
                          })

  onInterval(getUsers, INTERVAL)
</script>

<section>
  <h3>Active Users</h3>
  <h1 class="counter">
    {#each digits as digit}
      <span class="digit">{digit}</span>
    {/each}
  </h1>
</section>

<style lang="scss">
  .counter {
    font-size: 1em;
  }

  section {
    text-align: center;
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    font-size: clamp(4rem, 35vw, 15rem);
    padding: 0.3em 0 0.7em;
    line-height: 0.5em;
  }

  h1 {
    // letter-spacing: -0.05em;
    line-height: 1em;
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

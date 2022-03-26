<style lang="scss">
  a {
    text-decoration: underline;
  }

  h2 {
    font-size: clamp(0.9rem, 1.9vw, 1.6rem);
    margin: 1.6em 0.4em 0 0;
    text-transform: uppercase;
    display: inline-block;
    letter-spacing: -0.05em;

    @media (prefers-color-scheme: dark) {
      opacity: 0.41;
      font-weight: 100;
    }
  }

  section {
    display: inline-flex;
    flex-flow: row wrap;
    font-size: clamp(1.3rem, 2.4vw, 2.4rem);

    > *:not(:last-child) {
      margin-right: 0.4em;
    }

    @media (prefers-color-scheme: dark) {
      font-weight: 200;
    }
  }

  main {
    text-align: left;
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>


<main>
  <h2>Find me on:</h2>
  <section>
    <a href="https://twitter.com/kevinrwhitley">twitter</a>
    <a href="https://github.com/kwhitley">github</a>
    <a href="https://www.npmjs.com/~krwhitley">npm</a>
    <a href="https://www.linkedin.com/in/kevinrwhitley/">linkedin</a>
    <a href="https://slick.af/kevin">slick</a>
  </section>
</main>


<script>
  import before from '/static/houston-chronicle.before.png'
  import after from '/static/houston-chronicle.after.png'
</script>

<style type="scss">
  img {
    max-width: 100%;
    outline: 2px solid white;
    box-shadow: 1em 1em 1em rgba(0,0,0,0.5);
  }

  section {
    margin-left: 1em;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 5em;
    // outline: 2px solid red;

    div {
      flex: 1;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
        z-index: 2;
      }
    }
  }

  .before {
    flex: 2.5;
    z-index: 0;
  }

  .after {
    flex: 3;
    position: relative;
    left: -2em;
    top: 1em;
    z-index: 1;
  }

  header {
    font-size: 1.6em;
    margin-bottom: 0.4em;
  }
</style>

<section>
  <div class="before">
    <header>before</header>
    <img src={before} alt="Before Retheme" />
  </div>

  <div class="after">
    <header>after</header>
    <img src={after} alt="After Retheme" />
  </div>
</section>

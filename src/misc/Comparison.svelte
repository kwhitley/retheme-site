<script>
  import before from '/static/houston-chronicle.before.webp'
  import after from '/static/houston-chronicle.after.webp'
</script>

<style type="scss">
  img {
    max-width: 100%;
    height: auto;
    outline: 2px solid white;
    box-shadow: 1em 1em 1em rgba(0,0,0,0.5);
  }

  section {
    margin-left: 1em;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 6em;
    padding-left: 3vw;

    div {
      flex: 1;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
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
    left: -6vw;
    top: 2vw;
    z-index: 1;
  }

  header {
    font-size: clamp(2rem, 4vw, 2.6rem);
    margin-bottom: 0.4em;
  }
</style>

<section>
  <div class="before">
    <header>before</header>
    <img src={before} alt="Before Retheme" width="500" height="852" />
  </div>

  <div class="after">
    <header>after</header>
    <img src={after} alt="After Retheme" width="500" height="852" />
  </div>
</section>

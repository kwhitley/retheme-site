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
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 6em;
    display: grid;
    grid-template-areas: 'before-header after-header'
                         'before-image after-image';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    align-items: end;
    column-gap: 2em;

    div {
      flex: 1;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
        z-index: 2;
      }
    }
  }

  header {
    line-height: 0.8em;
    letter-spacing: -0.04em;
  }

  header.before {
    grid-area: before-header;
  }

  header.after {
    grid-area: after-header;
  }

  img.before {
    grid-area: before-image;
  }

  img.after {
    grid-area: after-image;
  }

  // .before {
  //   flex: 2.5;
  //   z-index: 0;
  // }

  // .after {
  //   flex: 3;
  //   position: relative;
  //   left: -6vw;
  //   top: 2vw;
  //   z-index: 1;
  // }

  header {
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    margin-bottom: 0.4em;
  }
</style>

<section class="hide-for-users">
  <header class="before">transforms ad-heavy sites:</header>
  <img class="before" src={before} alt="Before Retheme" width="500" height="852" />

  <header class="after">into clean, ad-free content:</header>
  <img class="after" src={after} alt="After Retheme" width="500" height="852" />
</section>

<style lang="scss">
  main {
    font-size: 1.1em;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    font-size: clamp(0.8em, 2vw, 1em);

    > * {
      /* outline: 2px solid red; */
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      /* justify-content: center; */
      /* outline: 2px solid red; */
      font-size: 2em;
      line-height: 1em;

      &:first-child {
        font-size: 1.5em;
        flex: 1 4em;
        padding-right: 2em;
      }
    }
  }

  header span {
    text-align: left;
  }

  ul {
    opacity: 0.7;
    min-height: 3.3em;
    font-size: 1.6em;
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 6em;
    /* outline: 2px solid red; */

    > li {
      font-weight: lighter;
      /* outline: 2px solid cyan; */
      /* display: flex; */
      /* align-items: center; */
      padding: 0.2em 0 0.2em 0.3em;
      min-width: 7em;
      text-align: left;
      position: relative;

      &:before {
        content: '✔︎';
        position: absolute;
        right: 100%;
        font-size: 0.75em;
      }


      > span {
        font-size: 1.2em;
        font-weight: lighter;
        margin-right: 0.5rem;
      }
    }
  }

  li:not(:last-child) {
    margin-bottom: 0.1em;
  }

  /* li:first-child {
    text-align: left;
  } */

  h2 {
    /* font-size: clamp(1em, 5vw, 1.3em); */
    font-size: 1.3em;
    padding-bottom: 0;
    flex: 0 1em;
    opacity: 0.5;
    letter-spacing: -0.06em;
    line-height: 0.85em;
    text-align: right;
    padding-right: 0.6em;
    text-transform: uppercase;
  }
</style>

<main>
  <header>
    <h2>a browser extension that</h2>
    <span>Removes ads, banners, popups, and overlays from sites and...</span>
  </header>

  <ul>
    <li>costs nothing</li>
    <li>tracks nothing</li>
    <li>sells nothing</li>
  </ul>
</main>

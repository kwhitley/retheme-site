<script>
  import Link from './Link.svelte'
  import { page } from '$app/stores'
  export let active = ''
</script>

<style lang="scss">
  br {
    display: none;

    @media (min-width: 57em) {
      display: block;
    }
  }

  span {
    white-space: nowrap;
  }

  :global a {
    position: relative;
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      transform: scale(1.05);
    }
  }

  u {
    text-decoration: none;
    // overflow: hidden;
    // display: inline-flex;
    // transition: all 0.1s ease;
    // max-width: 5em;
  }

  section {
    // outline: 1px solid red;
    display: inline;
  }

  h1 {
    // font-family: Arial Narrow, sans-serif;
    // letter-spacing: -0.04em;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: clamp(2rem, 5vmax, 6rem);
    text-align: left;
    // white-space: nowrap;
    // transition: transform 0.1s ease, opacity 1s ease;

    // @media (max-aspect-ratio: 1/2) {
    //   // transform: rotate(-90deg);
    //   white-space: nowrap;

    //   display: block;
    //   transform-origin: top left;
    //   /* Note: for a CLOCKWISE rotation, use the commented-out
    //     transform instead of this one. */
    //   transform: rotate(-90deg) translate(-100%, 135%);
    //   /* transform: rotate(90deg) translate(0, -100%); */
    //   margin-top: -60%;
    //   margin-left: -10%;
    //   // margin-top: 5em;
    //   // background-color: red;
    //   // position: absolute;
    //   // top: -0.5em;
    //   // left: -35vmin;
    //   // left: -4.1em;
    //   // margin-left: 0.75em;
    // }

    // &:hover {
      // outline: 2px dashed cyan;
      // u {
      //   max-width: 0;
      //   display: none;
      // }

      // section:not(.active) {
      //   display: none;
      //   position: absolute;
      // }

      // br {
      //   display: none;
      // }
    // }
  }

  .outer {
    display: table;
    // background-color: red;
  }

  // .inner {
  //   @media (max-aspect-ratio: 1/2) {
  //     padding: 50% 0;
  //     // height: 0;
  //     // background-color: cyan;
  //   }
  // }
</style>

<div class="outer">
  <div class="inner">
    <h1 class:active={!!active}>
      <section>
        My name is <span><Link href="/about">Kevin Whitley</Link><u>, </u></span>
      </section>
      <section>
        <u>and</u>
        <br />
        I design <Link href="/code">elegant code</Link>
      </section>
      <section>
        for
        <br>
        <strike>myself</strike> <span><Link href="/opensource">everyone</Link><u>.</u></span>
      </section>
    </h1>
  </div>
</div>

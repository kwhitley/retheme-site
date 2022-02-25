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
    font-size: clamp(3.4rem, 5vmax, 5.5rem);
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
    text-align: left;
  }


  // .inner {
  //   @media (max-aspect-ratio: 1/2) {
  //     padding: 50% 0;
  //     // height: 0;
  //     // background-color: cyan;
  //   }
  // }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0 0 0 1em;
    text-align: left;
  }

  .inner h2 {
    font-size: clamp(1.8rem, 3vmax, 2.5rem);
    margin: 0 0 0.4em 1em;
    margin-left: 0;
    transition: opacity 0.3s ease;

    &:before {
      content: '> ';
      white-space: nowrap;
      vertical-align: top;
    }

    opacity: 0.3;

    &.active, &:hover {
      opacity: 1;
    }
  }
</style>

<div class="outer">
  <div class="inner">
    <h1 class:active={!!active}>My name is <Link href="/about">Kevin Whitley</Link> and I:</h1>

    <h2 class:active={$page.url.pathname.includes('/vision')}>
      <Link href="/vision">transform vision into reality</Link>
    </h2>
    <h2 class:active={$page.url.pathname.includes('/empathy') || $page.url.pathname.includes('/opensource')}>
      <Link href="/code">build with empathy</Link>, for <strike>myself</strike> <Link href="/opensource">everyone</Link>
    </h2>
    <h2 class:active={$page.url.pathname.includes('/culture')}>
      <Link href="/culture">foster engineering culture</Link>
    </h2>
    <h2 class:active={$page.url.pathname.includes('/automation')}>
      <Link href="/automation">decrease & automate effort</Link>
    </h2>
  </div>
</div>

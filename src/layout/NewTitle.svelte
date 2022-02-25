<script>
  import Link from './Link.svelte'
  import { page } from '$app/stores'
  export let active = ''
</script>

<style lang="scss">
  h1 {
    font-size: clamp(3rem, 5vmax, 5.5rem);
    text-align: left;
  }

  .outer {
    display: table;
    text-align: left;
  }

  .inner h2 {
    font-size: clamp(1.6rem, 3vmax, 2.5rem);
    margin: 0 0 0.4em 1em;
    margin-left: 0;
    transition: opacity 0.3s ease;
    white-space: normal;
    opacity: 0.3;

    &:before {
      content: '> ';
      white-space: nowrap;
      vertical-align: top;
    }


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
      <Link href="/opensource">build for everyone</Link>
    </h2>
    <h2 class:active={$page.url.pathname.includes('/culture')}>
      <Link href="/culture">foster engineering culture</Link>
    </h2>
    <h2 class:active={$page.url.pathname.includes('/automation')}>
      <Link href="/automation">decrease & automate effort</Link>
    </h2>
  </div>
</div>

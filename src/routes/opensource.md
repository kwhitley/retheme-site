<svelte:head>
  <title>Kevin R. Whitley - Open Source</title>
</svelte:head>

I strongly believe in innovation through collaboration; that more eyes/feedback on a thing makes it better than the close-sourced equivalent; that we should be leading
through obsession and passion, rather than through defending progress with secrets.

To this end, I not only "build-in-public" as much as I'm able, but also continuously share back tooling created along the way. Here
are a few of the more popular libraries (or just the ones I think are pretty cool), in reverse chronological order (most recent first):

- **[itty-router-extras](https://www.npmjs.com/package/itty-router-extras)** - Once you get over the novelty of the code-golfed
  [itty-router](https://www.npmjs.com/package/itty-router), of course you'd need the quality of life utility functions for further abbreviating
  your code (e.g. json/text handling, status codes, convenience middlewares, etc).

- **[itty-router](https://www.npmjs.com/package/itty-route)** - The world's smallest feature-rich JS microrouter?  Who knows,
  maybe, but this router clocks in at under 500 bytes while giving clean, lightweight routing to any path-based system that
  handles requests.  This one is rapidly gaining popularity among the <a href="https://workers.cloudflare.com/">Cloudflare Workers</a>
  users (which I originally designed it for).

- **[slick-array](https://www.npmjs.com/package/slick-array)** - Sometimes you need a good old-fashioned array, but with automatic indexing for
  performant lookups (e.g. by id, group, etc).  This library isn't very popular, and it's certainly slower than using unmangled native arrays, but in terms of DX, it wins!

- **[react-data-hooks](https://www.npmjs.com/package/react-data-hooks)** - "Hooks"-style React API queries, to remove all the async mess of API-fetching from your component/state code. This
  predated react-query, which should certainly be used instead these days.

- **[use-store](https://www.npmjs.com/package/use-store)** - A simplified cross-component, persistable version of React's "useState" hook.
  Sometimes you just don't need an upstream context/provider or external state store!

- **[yarn-release](https://www.npmjs.com/package/yarn-release)** - I do a fair bit of publishing, and any time wasted in
  boilerplate steps (that I'm prone to forget in the heat of the moment), is time I could be doing... literally anything else.  This library
  simplifies the entire process, making releasing to major/minor/patch/next/whatever versions a one-liner, including committing, pushing,
  tagging, version-bumping, etc.  Standard inclusion in all my public libraries.

- **[treeize](https://www.npmjs.com/package/treeize)** - From back in the day when I used to actually get relational data out of direct
  queries and needed them to be transformed to a nice API-like graph.  Kinda cool, but don't look under the hood.  Notice the release date -
  I've grown since then, yet haven't touched the code!

- **[apicache](https://www.npmjs.com/package/apicache)** - This is the one that started it all... actually my first published
  library (that I can recall), designed for simplifying route-caching.  At the time (and still to this day), Node/Express lacked an obvious
  and human-readable path for response caching, so apicache was my answer to that - created to minimize server work, but most importantly, reduce
  latency to the end-user requests.  This library nets around 1.6 million downloads/year, as of December 2021.

  **Disclaimer:** Unfortunately, this library taught me many humbling lessons, like keeping the core vision lean (while flexible enough to extend), rather
  than over-committing on community feature requests... or the dangers of changing an API once in the wild.  I have a much greater
  appreciation for how hard it is to change directions once adoption has picked up!

## Slick.af - beautiful image galleries, but easier.

Beyond that, I've recently launched a side project, **<a href="https://slick.af">Slick.af</a>**.  Designed for my own photography/art-sharing needs,
this app was born on the idea that creative display of your images could cater to the infinitely-lazy (myself), while giving me an excuse to try a full-serverless
architecture on a more modern stack (<a href="https://workers.cloudflare.com/">Cloudflare Workers + KV</a>).

Backed by Dropbox (with expansion plans to Google Drive, etc), Slick allows users to just drop images (even RAW images straight out of their DSLR) into a
Dropbox folder.  In seconds, their images will appear in connected galleries for viewing or editing (e.g. titles, locations, stories).  I use this to
showcase my own work, and to quickly show subsets to potential clients (e.g. black and white vertical shots).  I built it for me, but decided it would be a
fun thing to share!

Slick is available for public signup today, and is provided free of charge, without ads or information gathering/selling - thanks in part to the incredible pricing model of <a href="https://workers.cloudflare.com/">Workers</a>.

But if it gets popular, I'll probably go broke...

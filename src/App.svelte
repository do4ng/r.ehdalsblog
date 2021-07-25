<script lang="ts">
  import Notfound from "./pages/notfound.svelte";

  import Footer from "./components/bottom.svelte";
  import Header from "./components/header.svelte";
  import Alert from "./components/alert.svelte";

  import Router, { location } from "svelte-spa-router";

  import { wrap } from "svelte-spa-router/wrap";
  import showalert from "./lib/showalert";

  const routes = {
    "/": wrap({ asyncComponent: () => import("./pages/main.svelte") }),
    "/p/:name": wrap({
      asyncComponent: () => import("./pages/p.svelte"),
    }),
    "/p/": wrap({
      asyncComponent: () => import("./pages/p-default.svelte"),
    }),
    "/c/:c": wrap({
      asyncComponent: () => import("./pages/c.svelte"),
    }),
    "/c/": wrap({
      asyncComponent: () => import("./pages/c-default.svelte"),
    }),
    "/guideline/": wrap({
      asyncComponent: () => import("./pages/guideline.svelte"),
    }),
    "*": Notfound,
  };
  let links = $location;
  setInterval(() => {
    if ($location != links) {
      //
      links = $location;
    }
  }, 1000);
</script>

<Alert />
<Header />
<div id="app">
  <Router {routes} />
</div>
<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Noto+Sans+KR&display=swap");

  @import url("../node_modules/highlight.js/styles/atom-one-dark.css");

  @import url("styles/headers.css");
  @import url("styles/code.css");
  @import url("styles/style.css");

  :root {
    font-family: "Inter", "Noto Sans KR", sans-serif;
    color: #242527;
    font-size: 1.13rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  :global(input) {
    font-family: "Inter", "Noto Sans KR", sans-serif;
  }
  :global(button) {
    font-family: "Inter", "Noto Sans KR", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #app {
    margin-top: 55px;
  }
</style>

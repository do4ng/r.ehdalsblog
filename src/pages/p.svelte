<script>
  import Marked from "../lib/markdown";
  import Post from "../data/posts.json";
  import Notfound from "./notfound.svelte";
  import B from "../components/effect/b.svelte";
  import getPostSimilarTime from "../lib/getPostSimilarTime";
  import showalert from "../lib/showalert";
  import Comment from "../components/comment.svelte";

  export let params = {};
  const p = Post[Number(params.name)];

  function recent(page) {
    if (typeof page === "object") {
      showalert("이미 보고있는 글입니다.", "warn");
      return;
    }
    window.location.href = `#/p/${page}`;
    window.location.reload();
  }

  async function getComment() {
    await fetch(`https://rehdalsblog.herokuapp.com/view/${params.name}`);
    const ress = await fetch(
      `https://rehdalsblog.herokuapp.com/getview/${params.name}`
    );
    const viewer = await ress.json();
    if (ress.ok) {
      return viewer.view;
    }
  }
  getComment().then((e) => (document.getElementById("viewer").innerText = e));
</script>

{#if Number(params.name) >= Post.length}
  <Notfound />
{:else if isNaN(params.name)}
  <Notfound />
{:else}
  <div class="view">
    <div class="intro">
      <div class="intro-title"><h1>{p.title}</h1></div>
      <div class="date"><span id="viewer" /> views, {p.date}</div>
      <div class="thumbnail"><img alt="" src={p.thumbnail} width="100%" /></div>
    </div>
    <div class="post headers">
      <div>{@html Marked(p.content)}</div>
    </div>
    <div class="outro">
      <b class="recent-post">이 블로그의 최신 글</b>
      <div class="recent-container">
        {#each getPostSimilarTime(3) as element}
          {#if element === Number(params.name)}
            <div class="recent">
              <button class="button-hide button-recent" on:click={recent}
                ><B content={Post[element].title} /></button
              >
              <span class="recent-date date">{Post[element].date}</span>
            </div>
          {:else}
            <div class="recent">
              <button
                class="button-hide button-recent"
                on:click={() => recent(element)}>{Post[element].title}</button
              >
              <div class="recent-date date">
                {Post[element].date}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
    <Comment id={params.name} />
  </div>
{/if}

<style>
  .view {
    width: 65%;
    margin: 15px auto;
    letter-spacing: -0.025rem;
  }
  .thumbnail {
    width: 80vw;
    margin: 2.5rem auto;
  }
  .date {
    color: #858585;
    padding-left: 5px;
  }
  .intro {
    margin-top: 155px;
  }
  .intro img {
    border-radius: 8px;
  }
  .intro-title {
    font-size: x-large;
  }
  .post {
    margin-top: 55px;
  }
  :global(.post img) {
    border-radius: 5px;
    box-shadow: -2px 5px 15px 1px #3636365e;
    margin: 2.5rem 0;
  }
  .outro {
    border-radius: 5px;
    border: solid 2.45px #d6d6d642;
    padding: 0.725rem;
    margin-top: 5.5rem;
  }
  .recent {
    display: flex;
    margin-top: 5px;

    font-weight: 600;
    font-size: 0.8rem;
  }
  .recent-post {
    font-size: 0.9rem;
  }
  .recent-container {
    margin: 15px 3px 0;
  }
  .recent-date {
    margin-left: auto;
    order: 2;
    font-size: 0.75rem;
  }
  .button-recent {
    color: #363636;
    font-size: 0.855rem;
    font-weight: 600;
  }
  :global(.view a) {
    text-decoration: none;
    color: #5683ff;
  }

  :global(.view a:hover) {
    text-decoration: solid 1px underline #5683ff;
  }
</style>

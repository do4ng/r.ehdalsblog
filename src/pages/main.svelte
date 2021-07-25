<script lang="ts">
  import B from "../components/effect/b.svelte";
  import Post from "../data/posts.json";
  import SortObj from "../lib/sortobj";
  const p = Post.reverse();
  let s = {};
  p.forEach((element) => {
    s[element.category] = s[element.category] + 1 || 1;
  });
  s = SortObj(s);
  function category(element) {
    window.location.href = `#/c/${element}`;
    window.location.reload();
  }
  function click(element) {
    window.location.href = `#/p/${element}`;
    window.location.reload();
  }
</script>

<div class="main-container">
  <div class="card-container">
    {#each p as element, index}
      <div class="main-card">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class="a-no-deco"
          role="button"
          on:click={() => click(p.length - index - 1)}
        >
          <div class="thumbnail-card">
            <img alt="" src={element.thumbnail} />
          </div>
          <div class="card-content">
            <h4>{element.title}</h4>
            <span class="card-content-less"
              >{element.content
                .substring(0, element.content.indexOf("##"))
                .replaceAll("\n", "")
                .substr(0, 80)} ...</span
            >
            <div class="card-date">{element.date} - #{element.category}</div>
          </div>
        </a>
      </div>
    {/each}
  </div>
  <div class="tags">
    <h4>카테고리 목록</h4>
    <div class="tags-element">
      <button on:click={() => category("all")} class="button-hide"
        ><span
          ><B content="전체 글" /><span class="tags-length"
            >({Post.length})</span
          ></span
        >
      </button>
    </div>
    {#each Object.keys(s).reverse() as element}
      <div class="tags-element">
        <button on:click={() => category(element)} class="button-hide"
          ><span>{element}<span class="tags-length">({s[element]})</span></span>
        </button>
      </div>
    {/each}
  </div>
</div>

<style>
  .main-container {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .tags {
    margin: 125px 0;
  }
  .tags-length {
    color: #929292;
    font-weight: 600;
    font-size: 0.8rem;
    padding-left: 5px;
  }
  .tags-element {
    margin-bottom: 7px;
    color: #4b4b4b;
    font-size: 0.925rem;
  }
  .tags-element button {
    color: #363636;
    font-size: 0.855rem;
    font-weight: 600;
  }
  .card-container {
    cursor: pointer;
    width: 1005px;
    margin: 125px 0;
    display: flex;
    flex-flow: row wrap;
  }
  .main-card {
    width: 275px;
    height: 335px;
    border: solid 0.5px #e9e9e9;
    border-radius: 8px;
    margin: 25px 15px;
    box-shadow: 0px 1px 5px #b2a9b85d;
    transition: all ease 0.1s 0s;
  }
  .main-card:hover {
    box-shadow: 0px 1px 10px #b2a9b85d;
    transition: all ease 0.1s 0s;
  }
  .thumbnail-card img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
  }
  .card-content {
    width: 90%;
    margin: 25px auto 0;
  }
  .card-content h4 {
    font-size: 0.9rem;
    margin: 5px 0;
  }
  .card-content-less {
    font-size: 0.7rem;
    font-weight: 550;
  }
  .card-date {
    font-size: 0.7rem;
    font-weight: 550;
    margin-top: 20px;
    color: #6d6d6d;
  }
  @media (max-width: 1270px) {
    /*1*/
    .main-container {
      width: auto;
      margin: 0 auto;
    }
    .card-container {
      width: 85%;
      margin: 50px 0;
      display: flex;
      flex-flow: row wrap;
    }
    .main-card {
      width: 45%;
      height: 25%;
      border: solid 0.5px #e9e9e9;
      border-radius: 8px;
      margin: 25px 15px;
      box-shadow: 0px 1px 5px #b2a9b85d;
      transition: all ease 0.1s 0s;
    }
    .tags {
      margin: 55px 0;
    }
    .tags-length {
      color: #929292;
      font-weight: 600;
      font-size: 0.8rem;
      padding-left: 5px;
    }
  }
  @media (max-width: 820px) {
    /*1*/
    .main-container {
      width: 100%;
      margin: 0 auto;
    }
    .card-container {
      width: 100%;
      margin: 25px 0;
      display: flex;
      flex-flow: row wrap;
    }
    .main-card {
      width: 100%;
      height: 15%;
      border: solid 0.5px #e9e9e9;
      border-radius: 8px;
      margin: 25px 15px;
      box-shadow: 0px 1px 5px #b2a9b85d;
      transition: all ease 0.1s 0s;
    }
    .tags {
      margin: 55px 0;
      display: none;
    }
  }
</style>

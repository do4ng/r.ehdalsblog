<script lang="ts">
  import showalert from "../lib/showalert";

  import B from "../components/effect/b.svelte";
  import Post from "../data/posts.json";
  import SortObj from "../lib/sortobj";
  let p = [];
  export let params = { c: "" };
  let sl = [];
  Post.forEach((e, index) => {
    if (e.category == params.c || params.c == "all") {
      p.push(e);
      sl.push(index);
      console.log(sl);
    }
  });
  sl = sl.reverse();
  let s = {};
  s["전체 글"] = Post.length;
  Post.forEach((element) => {
    s[element.category] = s[element.category] + 1 || 1;
  });
  s = SortObj(s);
  console.log(s);
  function category(element) {
    if (element === "전체 글") {
      element = "all";
    }
    window.location.href = `#/c/${element}`;
    window.location.reload();
  }
</script>

<div class="main-container">
  <div class="card-container">
    {#each p.reverse() as element, index}
      <div class="main-card">
        <a class="a-no-deco" href="#/p/{sl[index]}">
          <div class="thumbnail-card">
            <a class="a-no-deco" href="#/p/{sl[index]}">
              <img alt="" src={element.thumbnail} /></a
            >
          </div>
          <div class="card-content">
            <a class="a-no-deco" href="#/p/{sl[index]}">
              <h4>{element.title}</h4>
              <span class="card-content-less"
                >{element.content
                  .substring(0, element.content.indexOf("##"))
                  .replaceAll("\n", "")
                  .substr(0, 80)} ...</span
              ></a
            >
            <div class="card-date">{element.date} - #{element.category}</div>
          </div>
        </a>
      </div>
    {/each}
  </div>
  <div class="tags">
    <h4>카테고리 목록</h4>
    {#each Object.keys(s).reverse() as element}
      <div class="tags-element">
        <button on:click={() => category(element)} class="button-hide">
          {#if element == params.c}
            <span
              ><B content={element} /><span class="tags-length"
                >({s[element]})</span
              ></span
            >
          {:else if params.c === "all" && element === "전체 글"}
            <span
              ><B content={element} /><span class="tags-length"
                >({s[element]})</span
              ></span
            >
          {:else}<span
              >{element}<span class="tags-length">({s[element]})</span></span
            >
          {/if}
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

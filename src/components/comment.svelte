<script lang="ts">
  import MakeNickName from "../lib/makeNickName";

  import showalert from "../lib/showalert";

  // @ts-nocheck

  import B from "./effect/b.svelte";

  export let id;
  let isFetching = false;
  let comment = "";
  async function getComment() {
    const ress = await fetch(
      `https://rehdalsblog.herokuapp.com/getcomment/${id}`
    );
    const viewer = await ress.json();
    if (ress.ok) {
      return viewer.comments;
    } else {
      throw new Error(viewer);
    }
  }
  let promise = getComment();
  async function submitComment() {
    isFetching = true;
    showalert("댓글 등록 중..", "message");
    const ress = await fetch(
      `https://rehdalsblog.herokuapp.com/comment/${id}/${comment}`
    );
    if (ress.ok) {
      window.location.reload();
    } else {
      showalert("댓글 등록에 실패하였습니다.", "error");
    }
  }
  const submit = (e) => {
    if (e.charCode === 13) {
      if (isFetching) {
        showalert("댓글 처리 중 입니다.", "warn");
      } else {
        submitComment();
      }
    }
  };
</script>

{#await promise then value}
  <div class="comment-container">
    <h4 id="comment">
      댓글 <B content={Object.keys(value).length} />개
      <a class="a-hover-deco info" href="/#/guideline">?</a>
    </h4>
    <input
      type="text"
      placeholder="공개 댓글을 입력해주세요."
      autocomplete="off"
      class="comment-input"
      id="name"
      name="name"
      on:keypress={submit}
      bind:value={comment}
    />
    <div class="comment-element-container">
      {#each Object.keys(value).reverse() as element}
        <div class="comment-element">
          <div class="comment-user">
            <span class="comment-user-text">{MakeNickName()}</span>
          </div>
          <div class="comment-content">
            <span class="comment-content-text">{value[element]}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
{:catch error}
  <p style="color: red">댓글을 불러오지 못했습니다.</p>
{/await}

<style>
  .info {
    margin-left: 3px;
    font-size: 0.65rem;
  }
  .comment-container {
    width: 100%;
    margin: 55px auto;
  }
  .comment-element-container {
    margin: 25px 0;
  }
  .comment-element {
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: solid 2px #e9e9e942;
  }
  .comment-user {
    margin-top: 5px;
  }
  .comment-user-text {
    font-weight: 600;
    color: #2c2c2c;
    font-size: 0.95rem;
  }
  .comment-content {
    margin-top: 7px;
    font-size: 0.895rem;
  }
  .comment-input {
    width: 100%;
    height: 25px;
    font-size: 0.95rem;
    padding: 5px 25px;
    border-radius: 25px;
    border: solid 2px #ffffff00;
  }
  .comment-input {
    width: 90%;
    height: 25px;
    margin-bottom: 25px;
    font-size: 0.95rem;
    padding: 5px 25px;
    border-radius: 15px;
    outline-style: none;
    background: #ebebeb73;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #414141;
    display: inline-block;
  }
  .comment-send {
    display: flex;
  }
</style>

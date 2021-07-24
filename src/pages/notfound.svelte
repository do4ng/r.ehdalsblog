<script>
  import { location } from "svelte-spa-router";
</script>

<div class="page-not-found">
  <h2
    style="
  visibility: hidden;"
  >
    🤔 페이지를 찾을 수 없어요
  </h2>
  <h2>
    🤔 페이지 '<b style="font-size: 1.5rem">{$location}</b>'를 찾을 수 없습니다.
  </h2>
  URL이 올바른지 다시 확인해주세요.
</div>

<style>
  .page-not-found {
    margin-top: 90px;
    text-align: center;
  }
</style>

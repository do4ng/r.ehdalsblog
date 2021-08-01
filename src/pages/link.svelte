<script>
  export let params = { type: "", l: "" };

  if (params.type === null || params.type === "post" || params.type === "p") {
    history.pushState({}, "");
    window.location.href = `#/p/${params.l}`;
  }
  if (params.type === "category" || params.type === "c") {
    window.location.href = `#/c/${params.l}`;
  }
</script>

<div class="page-not-found">
  <h2>🤖 페이지 이동 중..</h2>
</div>

<style>
  .page-not-found {
    margin-top: 90px;
    text-align: center;
  }
</style>

<script>
  function hide() {
    document.getElementById("alert").classList.remove("alert-show");
    document.getElementById("alert").classList.remove("alert-warn");
    document.getElementById("alert").classList.remove("alert-error");
    document.getElementById("alert").classList.remove("alert-message");
  }
</script>

<div class="alert" id="alert">
  <div class="alert-content disable-select-text" id="alert-content" />
  <button class="button-hide" on:click={hide}>x</button>
</div>

<style>
  .alert {
    overflow-y: auto;
    display: flex;
    transition: all ease 0.1s 0s;
    visibility: visible;
    top: 90%;
    right: 15px;
    position: fixed;
    float: right;
    width: auto;
    font-size: 0.85rem;
    height: auto;
    font-weight: 600;
    background: rgba(163, 166, 180, 0);
    border: solid 2.5px #99c5ff00;
    border-radius: 7px;
    color: #ffffff00;
    backdrop-filter: none;
  }
  .alert button {
    display: inline-block;
    transition: all ease 0.1s 0s;
    color: #ffffff00;
    float: right;
    height: 7px !important;
    top: 0;
    padding-right: 5px;
  }
  .alert-content {
    padding: 11px 15px;
  }
  :global(.alert-error) {
    background: rgba(255, 212, 212, 0.863) !important;
    border: solid 2.5px #ff999996 !important;
    color: #464646 !important;
    transition: all ease 0.1s 0s;
  }
  :global(.alert-warn) {
    background: rgba(255, 249, 212, 0.863) !important;
    border: solid 2.5px #fff89996 !important;
    color: #464646 !important;
    transition: all ease 0.1s 0s;
  }
  :global(.alert-message) {
    background: rgba(212, 220, 255, 0.863) !important;
    border: solid 2.5px #99c5ff96 !important;
    color: #464646 !important;
    transition: all ease 0.1s 0s;
  }
  :global(.alert-show button) {
    color: #464646 !important;
    transition: all ease 0.1s 0s;
  }
  :global(.alert-show) {
    backdrop-filter: blur(1.75px);
  }
</style>

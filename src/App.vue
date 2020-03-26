<template>
  <div id="app">
    <main-button disabled color="primary">Hello</main-button>
    <main-button color="secondary">Hello</main-button>
    <main-button color="success">Hello</main-button>
    <main-button color="danger">Hello</main-button>
    <main-button color="warning">Hello</main-button>
  </div>
</template>

<script>
import MainButton from "@/components/buttons/MainButton";
import "./assets/style/_base.scss";

export default {
  components: { MainButton }
};
</script>

<style scoped>
#app {
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

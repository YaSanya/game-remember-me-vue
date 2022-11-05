<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/cat.gif">

    <h1 class="h1">Remember me</h1>
    <p>Запомни и открой все зеленые клетки</p>

    <Board></Board>
  </div>
</template>

<script>

import Board from "@/components/Board";

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style scoped>
.app {
  text-align: center;
  margin-top: 40px;
  font-family: "Comic Sans MS", serif;
}

.logo {
  width: 100px;
}
</style>

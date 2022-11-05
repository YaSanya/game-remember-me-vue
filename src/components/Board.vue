<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem :game-status="gameStatus" v-for="field in fields" :field="field" :key="'item-' + field.id"
                 @selectField="selectField($event)"/>
    </div>

    <p class="difficult">Сложность: <strong>{{ difficult }}</strong></p>
    <p class="win" v-if="isWin">Поздравляем! Продолжаем играть!</p>
    <p class="fail" v-if="isFAil">Вы проиграли. Попробуйте еще раз.</p>

    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
  </div>
</template>

<script>
import {ref} from "vue";
import BoardItem from "@/components/BoardItem";
import useGameInit from "@/components/composables/useGameInit";
import useGameStart from "@/components/composables/useGameStart";
import useGameProcess from "@/components/composables/useGameProcess";
import {GAME_STATUS} from "@/constants";

export default {
  name: "Board-desk",
  components: {
    BoardItem
  },
  setup() {

    let fields_amount = 25;
    const gameStatus = ref(GAME_STATUS.NONE);

    const {difficult, fields, init} = useGameInit(fields_amount);
    const {start, canStartGame} = useGameStart(init, fields, difficult, fields_amount, gameStatus);
    const {selectField, isWin, isFAil} = useGameProcess(fields, gameStatus, difficult, start);

    return {
      fields_amount,
      difficult,
      fields,
      init,
      start,
      gameStatus,
      canStartGame,
      selectField,
      isWin,
      isFAil
    }
  }
}
</script>

<style scoped>
.board-wrapper {
  margin-bottom: 100px;
}

.board {
  width: 300px;
  background: #eee;
  margin: 0 auto;
}

.btn {
  background: #42b983cc;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 10px 30px;
  margin: 10px 0;
  cursor: pointer;
  outline: none;
}

button:hover {
  background: #42b983;
}

button:disabled {
  opacity: .5;
}

.win {
  color: #42b983;
}

.fail {
  color: #ff000055;
}
</style>
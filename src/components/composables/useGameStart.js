import {FIELD, GAME_SPEED, GAME_STATUS} from "@/constants";
import {computed} from "vue";

export default function useGameStart(init, fields, difficult, fields_amount, gameStatus) {

    const start = () => {
        init();
        prepareGame();
    };

    const prepareGame = () => {
        gameStatus.value = GAME_STATUS.PREVIEW;

        for (let i = 0; i < difficult.value; i++) {
            const index = rand(0, fields_amount - 1);

            if (fields.value[index].value !== FIELD.FILLED) {
                fields.value[index].value = FIELD.FILLED;
            } else {
                i--;
            }
        }

        setTimeout(() => {
            gameStatus.value = GAME_STATUS.STARTED;
        }, GAME_SPEED)
    };

    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const canStartGame = computed(() => {
        return gameStatus.value !== GAME_STATUS.PREVIEW && gameStatus.value !== GAME_STATUS.WIN;
    });

    return {
        start,
        canStartGame
    }
}
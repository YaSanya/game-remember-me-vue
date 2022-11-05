import {onBeforeMount, ref, watch} from "vue";
import {FIELD, DEFAULT_DIFFICULT, MAX_DIFFICULT} from "@/constants";

export default function useGameInit(fields_amount) {
    let difficult = ref(DEFAULT_DIFFICULT);
    let fields = ref([]);

    const init = () => {
        fields.value = [];

        for (let i = 0; i < fields_amount; i++) {
            fields.value.push({
                id: i,
                clicked: false,
                value: FIELD.EMPTY
            });
        }
    }

    watch(difficult, (newDifficult) => {
        if(newDifficult > MAX_DIFFICULT) {
            difficult.value = MAX_DIFFICULT;
        }
    });

    onBeforeMount(init);   //непонято

    return {
        difficult,
        fields,
        init
    }
}
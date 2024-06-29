import { defineStore } from 'pinia';
import { type Ref, ref,computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  //State
  const count: Ref<number> = ref(0);
  // Getters
  const doubleCount = computed( ():number => count.value * 2);
  //actions
  const incrementCount = ():void => {
    count.value++;
  };

  return { count, doubleCount, incrementCount };
});

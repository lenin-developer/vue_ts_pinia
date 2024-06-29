import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

type PersonType = {
  age: number;
};

export const usePersonStore = defineStore('person', () => {
  //State
  const person: PersonType = reactive({ age: 0 });
  // Getters
  const doubleAge = computed((): number => person.age * 2);
  //actions
  function incrementAge() {
    person.age++;
  }

  return { person, incrementAge, doubleAge };
});

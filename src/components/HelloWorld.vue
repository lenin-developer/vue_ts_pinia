<script setup lang="ts">
import { useCounterStore, usePersonStore } from '@/stores';
defineProps<{ msg: string }>();

const counterStore = useCounterStore();
const personStore = usePersonStore();
const { person } = personStore;
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="counterStore.incrementCount">
    count is {{ counterStore.count }}
  </button>

  <p>{{ counterStore.doubleCount }}</p>

  <button type="button" @click="personStore.incrementAge">
    age is {{ person.age }}
  </button>

  <p>{{ personStore.doubleAge }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

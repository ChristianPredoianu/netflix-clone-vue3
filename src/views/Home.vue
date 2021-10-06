<template>
  <h1>Home</h1>
  <font-awesome-icon :icon="['fas', 'phone']" @click="getData" />
</template>
<script>
import { inject } from 'vue';

export default {
  setup() {
    const axios = inject('axios');

    const getData = () => {
      axios.get('https://swapi.dev/api/').then((response) => {
        console.log(response.data);
      });
    };
    return { getData };
  },
};
</script>
<style lang="scss">
@use '../scss/views/_browse.scss';
</style>

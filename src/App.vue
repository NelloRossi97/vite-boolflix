<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>
import axios from 'axios';
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
  name: 'App',
  components: {
    HeaderComponent,
      MainComponent
  },
  data() {
    return {
        store
      }
  },
  methods: {
    getFilms() {
      const url = store.baseUrl + store.searchMovie + store.api_key + store.endpoint;
      axios.get(url).then((res) => {
        console.log(res.data.results);
        store.cardsList = res.data.results;
      })
    }
  },
  mounted() {
    store.endpoint = '&language=en-US&query=g&page=1&include_adult=false';
    this.getFilms();
  }
  }
</script>

<style lang="scss" scoped>

</style>
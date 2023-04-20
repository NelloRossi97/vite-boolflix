<template>
  <HeaderComponent @on-search="getFilms"/>
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
      const url = store.baseUrl + store.endpoint.movie;
      const options = {
        params: store.params
      }
      axios.get(url, options).then((res) => {
        console.log(res.data.results);
        this.store.filmList = res.data.results;
      })
    }
  },
  mounted() {
  }
  }
</script>

<style lang="scss" scoped>

</style>
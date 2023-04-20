<template>
  <HeaderComponent @on-search="getData"/>
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
        this.store.filmList = res.data.results;
      })
    },
    getSeries() {
      const url = store.baseUrl + store.endpoint.tv;
      const options = {
        params: store.params
      }
      axios.get(url, options).then((res) => {
        this.store.seriesList = res.data.results;
      })
    },
    getData() {
      this.getFilms();
      this.getSeries();
    }
    }
  }
</script>

<style lang="scss" scoped>

</style>
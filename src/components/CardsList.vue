<template>
    <h2 class="mt-4">{{ title }}</h2>
    <div class="row mt-4 gap-3 align-items-center">
        <Card :image="'/image/logo.png'" :titleCard="film.title" v-for="film in store.filmList"/>
    </div>
</template>

<script>
import { store } from '../data/store';
import Card from './Card.vue';
    export default {
    name: 'CardsList',
    props: ['title'],
    components: { Card },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
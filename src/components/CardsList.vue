<template>
    <h2 class="mt-4">Film</h2>
    <div class="row mt-4 gap-3 align-items-center flex-nowrap overflow-auto p-3">
        <Card
        :item="item" 
        :titleCard="item.title" 
        :description="item.overview"
        :language="item.original_language"
        :rating="item.vote_average"
        v-for="(item, index) in store.filmList"
        />
    </div>
    <h2 class="mt-4">Series</h2>
    <div class="row mt-4 gap-3 align-items-center flex-nowrap overflow-auto p-3">
        <Card 
        :item="item"
        :titleCard="item.name" 
        :description="item.overview"
        :language="item.original_language"
        :rating="item.vote_average"
        v-for="(item, index) in store.seriesList"/>
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
.row{
    width: 100%;
    padding-left: 0;
    padding-right: 0;
}
</style>
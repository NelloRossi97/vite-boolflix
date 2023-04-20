<template>
    <div v-if="store.params.query !== ''">
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
    </div>
    
    <div v-if="store.params.query !== ''">
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
    </div>
    
    <div v-if="store.params.query === ''">
            <h2 class="mt-4">I Film più visti questa settimana</h2>
            <div class="row mt-4 gap-3 align-items-center flex-nowrap overflow-auto p-3">
                <Card 
                :item="item"
                :titleCard="item.title" 
                :description="item.overview"
                :language="item.original_language"
                :rating="item.vote_average"
                v-for="(item, index) in store.popularFilmList"/>
            </div>
    </div>

    <div v-if="store.params.query === ''">
            <h2 class="mt-4">Le serie TV più viste questa settimana</h2>
            <div class="row mt-4 gap-3 align-items-center flex-nowrap overflow-auto p-3">
                <Card 
                :item="item"
                :titleCard="item.name" 
                :description="item.overview"
                :language="item.original_language"
                :rating="item.vote_average"
                v-for="(item, index) in store.popularSeriesList"/>
            </div>
    </div>

</template>

<script>
import axios from 'axios';
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
    },
    methods: {
        getPopularFilms() {
            const url = store.baseUrl + '/trending/movie/week';
            const options = {
                params: store.params
            }
            axios.get(url, options).then((res) => {
                this.store.popularFilmList = res.data.results;
            })
        },
        getPopularSeries() {
            const url = store.baseUrl + '/trending/tv/week';
            const options = {
                params: store.params
            }
            axios.get(url, options).then((res) => {
                this.store.popularSeriesList = res.data.results;
            })
        },
    },
    mounted() {
        this.getPopularFilms();
        this.getPopularSeries();
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
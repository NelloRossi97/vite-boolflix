<template>
    <div class="col-12 col-md-6 col-lg-1 d-flex justify-content-center card-container rounded-4 overflow-hidden">
        <div class="d-flex flex-column align-items-center w-100 h-100">
            <img :src="url" alt="logo" class="w-100 h-100">  
        </div>
        <div class="d-none">
            <p class="mt-2">{{ titleCard }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
    name: 'Card',
    props: ['index', 'titleCard'],
    data() {
        return {
            store,
            baseUrl: store.baseUrlImg,
            url: ''
        }
    },
    mounted() {
        this.url = `${this.baseUrl}${this.store.filmList[this.index].poster_path}`;
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-container{
    width: 300px;
    height: 450px;
    background-color: $bg-cards;
}
</style>
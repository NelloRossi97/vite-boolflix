<template>
    <div class="col-12 col-md-6 col-lg-1 d-flex justify-content-center card-container rounded-4 overflow-hidden p-0">
        <div class="d-flex flex-column align-items-center w-100 h-100 d-none">
            <img :src="getUrl" alt="logo" class="w-100 h-100"> 
        </div>
        <div class="p-4 d-flex flex-column justify-content-between">
            <h4 class="mt-2">{{ titleCard }}</h4>
            <p>{{ description }}</p>
            <span>Lingua originale: {{ language }}</span>
            <span v-if="getRating === 1">
                Valutazione:
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-if="getRating === 2">
                Valutazione:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-if="getRating === 3">
                Valutazione:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-if="getRating === 4">
                Valutazione:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-if="getRating === 5">
                Valutazione:
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star"></i>  
            </span>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
    name: 'Card',
    props: ['item','titleCard', 'description','language', 'rating'],
    data() {
        return {
            store,
            url: ''
        }
    },
    computed: {
        getUrl() {
            this.url = `${this.store.baseUrlImg}${this.item.poster_path}`;
            return this.url;
        },
        getRating() {
            const stars = this.rating / 2;
            let total = Math.trunc(stars);
            console.log(total);
            return total;
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-container{
    width: 300px;
    height: 450px;
    background-color: $bg-cards;
    p{
        max-height: 60%;
        overflow-y: auto;
    }
}
</style>
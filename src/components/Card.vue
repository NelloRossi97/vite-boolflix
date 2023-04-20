<template>
    <div class="col-12 col-md-6 col-lg-1 d-flex justify-content-center card-container rounded-4 overflow-hidden p-0">
        <div id="image" class="d-flex flex-column align-items-center w-100 h-100 position-relative"
        v-if="active === false">
            <img :src="getUrl" alt="logo" class="w-100 h-100"> 
            <span class="position-absolute" 
            v-if="active === false"
            @click="active = !active">
            Info <i class="fa-regular fa-circle-info">

            </i></span>
        </div>
        <div id="info" 
        class="p-4 d-flex flex-column justify-content-between position-relative"
        v-if="active === true">
            <span class="position-absolute" 
            v-if="active === true"
            @click="active = !active">
                <i class="fa-regular fa-arrow-left fs-2"></i>
            </span>
            <h4 class="mt-2">{{ titleCard }}</h4>
            <p>{{ description }}</p>
            <span>Lingua originale: {{ language }}</span>
            <span>
                Valutazione: <i class="fa-solid fa-star" v-for="star in Math.trunc(rating/2)"></i>
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
            url: '',
            active: false
        }
    },
    computed: {
        getUrl() {
            this.url = `${this.store.baseUrlImg}${this.item.poster_path}`;
            return this.url;
        },
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
    };
    #image{
        &:hover{
            span{
               cursor: pointer;
                background-color: $bg-color; 
            }
        }
        span{
            right:10px;
            top: 5px;
            padding: 0 5px;
            border-radius: 10px;
        }
    }
    #info{
        span{
            right:15px;
            top: 10px;
            padding: 0 5px;
            border-radius: 10px;
            &:hover{
                cursor: pointer;
            }
        }
    }
}
</style>
<template>
    <div class="col-12 col-md-6 col-lg-1 d-flex justify-content-center card-container rounded-4 overflow-hidden p-0">
        <div id="image" class="d-flex flex-column align-items-center w-100 h-100 position-relative"
        v-if="active === false">
            <img :src="getUrl" alt="logo" class="w-100 h-100"> 
            <span id="icon-info" class="position-absolute" 
            v-if="active === false"
            @click="active = !active">
            Info <i class="fa-solid fa-circle-info">

            </i></span>
        </div>
        <div id="info" 
        class="p-4 d-flex flex-column justify-content-between position-relative"
        v-if="active === true">
            <span id="icon-back" class="position-absolute" 
            v-if="active === true"
            @click="active = !active">
                <i class="fa-solid fa-arrow-left fs-2"></i>
            </span>
            <h4 class="mt-2">{{ titleCard }}</h4>
            <p>{{ description }}</p>
            <p>Lingua originale: <span class="ms-1" :class="'fi fi-' + language + ' fis'"></span></p>
            <span>
                Valutazione: <i class="fa-solid fa-star" :class="(n<=stars) ? 'fa-solid' : 'fa-regular'" v-for="(n,index) in 5" :key="index"></i>
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
        stars() {
            return Math.trunc   (this.rating/2)
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@import 'flag-icons/css/flag-icons.min.css';

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
        #icon-info{
            right:10px;
            top: 5px;
            padding: 0 5px;
            border-radius: 10px;
        }
    }
    #info{
        #icon-back{
            right:15px;
            top: 10px;
            padding: 0 5px;
            border-radius: 10px;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .fi{
        border-radius: 5px;
    }
}
</style>
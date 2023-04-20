<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center h-100 px-3">
            <div class="d-flex align-items-center p-1 h-100">
                <img src="/image/logo.png" alt="logo">
                <ul class="nav d-none d-lg-flex">
                    <li class="nav-item">
                       <a href="" class="nav-link text-white">Home</a> 
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white">Serie TV</a> 
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white">Film</a> 
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white">Nuovi e popolari</a> 
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white">Sfoglia per lingua</a> 
                    </li>
                </ul>
            </div>
            
            <div>
                <input type="text" placeholder="Cerca film o serie TV" class="me-3" v-model="store.params.query" @keyup.enter="$emit('onSearch')">
                <button type="submit" class="btn btn-danger" @click="$emit('onSearch')">Cerca</button>
            </div>
        </nav>
    </header>
</template>

<script>
import { store } from '../data/store';
    export default {
    name: 'HeaderComponent',
    data() {
        return {
               store 
            }
        }
}
</script>

<style lang="scss" scoped>
header{
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(20,20,20,1) 100%);
    height: 60px;
    width: 100vw;
    img{
        width: 15vw;
        height: 100%;
    }
}
</style>
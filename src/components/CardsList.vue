<template>
    <h2 class="mt-4">{{ title }}</h2>
    <div class="row mt-4 gap-3 align-items-center">
        <Card :image="'/image/logo.png'" :titleCard="'Titolo'"/>
    </div>
</template>

<script>
import Card from './Card.vue';
    export default {
    name: 'CardsList',
    props: ['title'],
    components: { Card }
    }
</script>

<style lang="scss" scoped>

</style>
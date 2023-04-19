<template>
    <main class="container">
       <CardsList :title="'La tua ricerca'"/>
    </main>
</template>

<script>
import CardsList from './CardsList.vue';
    export default {
    name: "MainComponent",
    components: { CardsList }
}
</script>

<style lang="scss" scoped>

</style>
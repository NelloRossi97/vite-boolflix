<template>
    <main class="container-fluid">
       <CardsList/>
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
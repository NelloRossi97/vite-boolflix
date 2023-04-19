<template>
    <div class="col-12 col-md-2 d-flex justify--content-center card-container rounded-4 overflow-hidden">
        <div class="d-flex flex-column align-items-center w-100">
            <img :src="image" alt="logo" class="img-fluid h-75">
            <h4 class="mt-2">{{ titleCard }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Card',
    props:['image', 'titleCard']
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-container{
    width: 300px;
    height: 200px;
    background-color: $bg-cards;
}
</style>
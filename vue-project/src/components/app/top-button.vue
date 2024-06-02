<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>

<div @click="scrollToTop" class="top-button"></div>

</template>

<style scoped>
@import url('@/assets/reset.css');

.top-button {
    position: fixed;
    bottom: 30dvh;
    right: 20px;
    z-index: 999;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url('/stat.svg');
    background-size: cover;
    border: none;
    cursor: pointer;
    animation: blink 2s infinite alternate;
    filter: invert(80%);
}
@keyframes blink {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
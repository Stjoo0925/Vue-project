<script setup>
import AboutMe from './aritcle_stuff/AboutMe.vue';
import TechSkills from './aritcle_stuff/TechSkills.vue';
import Portfolio from './aritcle_stuff/Portfolio.vue';
import Contact from './aritcle_stuff/Contact.vue';
import 'animate.css';

</script>

<template>
    <div class="section_container">
        <div id='aboutme'>
            <h2 class="title animate__animated animate__rubberBand">AboutMe</h2>
            <div class="section_box animate__animated animate__rotateInDownLeft">
                <AboutMe/>
            </div>
        </div>
        <div id="techskills">
            <h2 class="title animate__animated animate__rubberBand">TechSkills</h2>
            <div class="section_box animate__animated animate__rotateInDownRight">
                <TechSkills/>
            </div>
        </div>
        <div id='portfolio'>
            <h2 class="title animate__animated animate__rubberBand">Portfolio</h2>
            <div class="section_box animate__animated animate__rotateInDownLeft">
                <Portfolio/>
            </div>
        </div>
        <div id="contact">
            <h2 class="title animate__animated animate__rubberBand">Contact</h2>
            <div class="section_box animate__animated animate__rotateInDownRight">
                <Contact/>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('@/assets/section.css');
</style>

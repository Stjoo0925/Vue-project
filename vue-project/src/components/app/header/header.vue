<script setup>

</script>

<template>
    <div class="HD_container">
        <div @click="" class="HD_homeImg">
            <img src="../../../../public/flash-outline.svg" alt="No image">
        </div>
        <div class="HD_navBar">
            <div class="HD_navItem" @click="">Home</div>
            <div class="HD_navItem" @click="">AboutMe</div>
            <div class="HD_navItem" @click="">TechSkills</div>
            <div class="HD_navItem" @click="">Portfolio</div>
            <div class="HD_navItem" @click="">Contact</div>
        </div>
        <div>
            <div class="HD_menu">
                <img src="../../images/menu.svg" alt="No image">
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../assets/reset.css');
@import url('../../../assets/font.css');

.HD_container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  
    height: 75px;
    padding: 1rem;
    color: white;
    background: #000;
    font-weight: bold;
    color: #fff;
    font-family: "Playfair Display", serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.HD_homeImg{
    margin-left: 20px;
    cursor: pointer;
    flex: 8 1 auto;
} .HD_homeImg > img {
    filter: invert(100%);
    width: 40px;
    height: 40px;
}

.HD_navBar{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1 1 auto;
}
.HD_navItem{
    display: flex;
    height: 1px;
    border-right: 2px solid #fff;
    margin: 2px;
    padding: 10px;
    align-items: center;
    cursor: pointer;
}

.HD_menu{
    margin-right: 20px;
    cursor: pointer;
    flex: 1 1 auto;
} .HD_menu > img {
    width: 30px;
    height: 30px;
}
</style>

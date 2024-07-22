<script setup>

</script>

<template>
    <div class="about_con">
        <div class="about_con_left">
            <div class="left_box">
                <p>항상 고민하고 최선의 방법을 찾아내는 개발자가 되도록 노력하겠습니다.</p>
            </div>
            <div class="left_box">경력</div>
            <div class="left_box">프로젝트</div>
        </div>
        <div class="about_con_right">
            <div class="right_img"></div>
        </div>
    </div>

</template>

<style scoped>

.about_con {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    height: 400px;
    width: 85%;
    padding: 5px;
    margin-bottom: 50px;
    overflow: hidden;
    margin-left: 30px;
    margin-right: 30px;
    font-family: "Song Myung", serif;
}

.about_con_left {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    flex: 6 1 auto;
    margin-right: 10px;
}

.left_box {
    display: flex;
    align-items: center;
    height: 100%;
    text-align: left;
    padding: 20px;
    border: 3px solid #999;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.about_con_right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 4 1 auto;
} 
.right_img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-image: url("/166350549.png");
    background-size: cover;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
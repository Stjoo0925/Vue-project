<script setup>
import { onMounted } from 'vue';

let target;
const string = "Soon Tae Joo Back-End Developer Portfolio"; // 원하는 텍스트
const split = string.split(""); // 텍스트를 개별 문자로 분할

// 깜박임 효과를 위한 함수
function blink(){
    target.classList.toggle("active");
}

// 텍스트를 동적으로 표시하는 함수
function dynamic(arr){
    if (arr.length > 0) {
        target.textContent += arr.shift();
        setTimeout(function() {
            dynamic(arr);
        }, 80); // 80ms 후에 dynamic 함수를 다시 호출
    }
}

// onMounted 훅을 사용하여 DOM이 완전히 로드된 후에 실행
onMounted(() => {
    target = document.querySelector("#dynamic");
    dynamic(split);
    setInterval(blink, 500); // 0.5초마다 깜박임 효과 실행
});
</script>

<template>
<div class="hero">
    <p id="dynamic"></p>
</div>
</template>

<style scoped>
/* 동적 텍스트를 위한 CSS */
.hero #dynamic {
    position: relative;
    display: inline-block;
    font-size: 18px;
    margin-left: 20px;
}

.hero #dynamic::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -10px;
    width: 4px;
    height: 100%;
    background-color: white;
}

.hero #dynamic.active::after {
    display: none;
}
</style>

<script setup>
const apple = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const kakao = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const payko = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const zero = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const google = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const naver = () => {
 
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const lpay = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const toss = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};
</script>

<template>
  <div>
    <div style="display: flex; margin: 20px 0 0 50px">
      <p style="font-size: 25px; font-weight: 200; text-align: center">
        간편결제
      </p>
    </div>

    <div class="EasyPayment_box">
      <div class="EasyPayment_box_card" @click="apple">
        <img src="/applepay.svg" />
        <p>Apple Pay</p>
      </div>
      <div class="EasyPayment_box_card" @click="kakao">
        <img src=" /kakaopay.svg" />
        <p>KAKAO PAY</p>
      </div>
      <div class="EasyPayment_box_card" @click="payko">
        <img src=" /payco.svg" />
        <p>PAYCO</p>
      </div>
    </div>

    <div class="EasyPayment_box1">
      <div class="EasyPayment_box_card1" @click="zero">
        <img src=" /zeropay.svg" />
        <p>제로페이</p>
      </div>
      <div class="EasyPayment_box_card1" @click="google">
        <img src=" /googlepay.svg" />
        <p>google pay</p>
      </div>
      <div class="EasyPayment_box_card1" @click="naver">
        <img src=" /naverpay.svg" />
        <p>naver pay</p>
      </div>
    </div>

    <div class="EasyPayment_box2">
      <div class="EasyPayment_box_card2" @click="lpay">
        <img src=" /lpay.svg" />
        <p>엘 페이</p>
      </div>
      <div class="EasyPayment_box_card2" @click="toss">
        <img src=" /toss.svg" />
        <p>toss</p>
      </div>
      <div class="EasyPayment_box_card3">
      </div>
    </div>
  </div>
  
</template>

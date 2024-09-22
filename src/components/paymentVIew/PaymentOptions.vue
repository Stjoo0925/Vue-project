<script setup>
const payment = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};

const kfc = () => {
  
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "block";
  }
};
</script>


<template>
  <div>
    <div>
      <p style="font-size: 50px; font-weight: 300; text-align: center;">
        결제 수단을 <br />선택해 주세요
      </p>
    </div>

    <div style="margin-top: 15px">
      <p style="font-size: 30px; font-weight: 300; text-align: center">
        현금 결제는 카운터에서 가능합니다.
      </p>
    </div>

    <div class="goodPayment_box" @click="payment">
      <div class="goodPayment_box_card">
        <div class="goodPayment_box_card_Creditcard">
          <div class="goodPayment_box_card_Creditcard_in">
            <img class="goodPayment_box_card_Creditcard_img" src=" /card.png" />
          </div>
          <div>
            <p class="goodPayment_box_card_Creditcard_p">신용/체크카드</p>
          </div>
        </div>
      </div>

      <div class="goodPayment_box_kfccard" @click="kfc">
        <div class="goodPayment_box_kfccard_card">
          <div class="goodPayment_box_kfccard_card_in">
            <img class="goodPayment_box_kfccard_card_img" src="../../../public/img/kfc.png" />
          </div>
          <div>
            <p class="goodPayment_box_card1_Creditcard_p">KFC선불카드</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



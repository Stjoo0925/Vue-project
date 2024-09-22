<script setup>
import Header from "@/components/paymentVIew/Header.vue";
import PaymentOptions from "@/components/paymentVIew/PaymentOptions.vue";
import EasyPayment from "@/components/paymentVIew/EasyPayment.vue";
import Footer from "@/components/paymentVIew/Footer.vue";
import PopBox from "../components/paymentVIew/PopBox.vue";
</script>

<template>
  <section class="All_Box">
    <Header />
    <PaymentOptions />
    <EasyPayment />
    <Footer />
    <PopBox />
  </section>
</template>

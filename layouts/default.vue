<template>
  <div>
    <Header></Header>
    <div class="container">
      <NuxtPage />
    </div>
    <div class="footer-container">
      <div class="container">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
  
<style scoped lang="scss">
.footer-container {
  padding-top: 140px;
  background-color: $purple-light;
}
</style>
  
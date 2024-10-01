<template>
  <footer class="footer">
    <p>Is there a project?</p>

    <div class="footer-contacts">
      <h1>Let’s work together</h1>
      <div class="footer-contacts__block">
        <div class="footer-contacts__block-item">
          <p class="item-title">
            For all questions
          </p>
          <p>+7 (920) 278—00—68</p>
          <p>qtim@agency.com</p>
        </div>
        <div class="footer-contacts__block-item">
          <p class="item-title">
            Office in Russia
          </p>
          <p>139 Ruben Station Lake Drew, NM 52678</p>
          <mailIcon></mailIcon>
        </div>
        <div class="footer-contacts__block-item">
          <p class="item-title">
            Office in Dubai
          </p>
          <p>139 Ruben Station Lake Drew, NM 52678</p>
          <mailIcon></mailIcon>
        </div>
      </div>
    </div>

    <div class="footer-nav">
      <div class="footer-nav__left">
        <nav>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </nav>
      </div>
      <button class="btn-footer-go">Go</button>
      <div class="footer-nav__right">
        <nav>
          <ul>
            <li>Behance</li>
            <li>LinkedIn</li>
            <li>Private Policy</li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import mailIcon from '~/assets/img/icons/mail.vue'
</script>

<style scoped>
</style>

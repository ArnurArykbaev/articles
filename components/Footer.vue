<template>
  <footer class="footer">
    <p>Is there a project?</p>

    <div class="footer-contacts">
      <h1>Let’s work <br> together</h1>
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

<style scoped lang="scss">
.footer {
  overflow: hidden;

  &-contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 55px;

    h1 {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 10px;
      line-height: 130px;
    }

    &__block {
      display: flex;
      flex-direction: column;
      row-gap: 35px;
      width: 155px;
      margin-bottom: 270px;

      &-item {
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        .item-title {
          margin-bottom: 4px;
        }
      }

    }
  }

  &-nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 30px;

    &__left {
      nav {
        ul {
          display: flex;
          flex-direction: row;
          column-gap: 30px;

          li {
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 8px;
          }
        }
      }
    }

    &__right {
      nav {
        ul {
          display: flex;
          flex-direction: row;
          column-gap: 30px;

          li {
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 8px;
          }
        }
      }
    }

    button.btn-footer-go {
      position: absolute;
      font-size: $fz-lg;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      border: none;
      background-color: $black;
      color: $white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

<template>
    <header>
        <div class="header">
            <a href="/"><img src="../assets/img/Qtim.svg" alt=""></a>
            <div class="header-panel">
                <nav>
                    <ul>
                        <li><a href="/works">Works</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>

                <div class="header-panel__block">
                    <button class="language">
                        <img src="../assets/img/icons/uk.svg" alt="">
                    </button>
                    <button class="btn-lets_work">
                        Let’s work
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script setup lang="ts">
</script>
  
<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 40px;

    &-panel {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 90px;

        ul {
            display: flex;
            flex-direction: row;
            column-gap: 60px;

            li {
                position: relative;
                transition: transform 0.3s;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    background-color: $black;
                    transition: width 0.4s ease;
                    bottom: 0px;
                }

                &::before {
                    left: 100%;
                    width: 0;
                    transform: translateX(-100%);
                }

                &::after {
                    right: 100%;
                    width: 0;
                    transform: translateX(100%);
                }

                &:hover {
                    &::before {
                        width: 100%;
                    }

                    &::after {
                        width: 100%;
                    }
                }
            }
        }

        &__block {
            display: flex;
            flex-direction: row;
            align-items: center;
            column-gap: 16px;

            button.language {
                width: 52px;
                aspect-ratio: 1;
                padding: 14px;
                border-radius: 50%;
                border: 2px solid $gray-light;
                background-color: $white;
                transition: transform 0.3s;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                }
            }

            button.btn-lets_work {
                display: flex;
                align-items: center;
                height: 52px;
                border-radius: 52px;
                border: none;
                padding: 16px 32px;
                background-color: $black;
                color: $white;
                transition: transform 0.3s;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>
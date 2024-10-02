<template>
  <div class="post">
    <h2 class="post-title">At Test & Code, you can learn about software design</h2>
    <img :src="post?.image" alt="post image">
    <div class="post-info">
      <p class="post-info__about">About</p>
      <p class="post-info__description">{{ post?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from '~/models/Article';
import { getArticle } from '~/services/article';

const route = useRoute()

const post: Ref<Article | undefined> = ref();

onMounted(async () => {
  console.log('route', route.params.id)
  post.value = (await getArticle(route.params.id + ''));
});
</script>
  
<style scoped lang="scss">
.post {
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  padding-bottom: 80px;

  &-title {
    line-height: 1
  }

  &-info {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-top: 10px;

    &__description {
      font-size: $fz-lg;
    }
  }
}
</style>
  
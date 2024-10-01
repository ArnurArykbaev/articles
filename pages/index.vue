<template>
  <div class="posts">
    <h2>Articles</h2>
    <PostsList :posts="articles" />
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue';
import PostsList from '~/components/posts/PostsList.vue';
import { getArticles } from '~/services/articles';
import { Article } from '~/models/Article';

const articles: Ref<Article[]> = ref([]);

onMounted(async () => {
  articles.value = await getArticles();
});
</script>

<style scoped>
</style>

<template>
  <div class="main">
    <h2>Articles</h2>
    <PostsList :posts="currentPagePosts" />
    <Pagination :totalPages="totalPages" @page-change="onPageChange" />
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, onMounted, computed } from 'vue';

import PostsList from '~/components/posts/PostsList.vue';
import Pagination from '~/components/Pagination.vue';

import { getArticles } from '~/services/articles';
import { Article } from '~/models/Article';
import dayjs from 'dayjs';


const articles: Ref<Article[]> = ref([]);
const currentPage = ref(1);
const itemsPerPage = 8;


const currentPagePosts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return articles.value.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(articles.value.length / itemsPerPage);
});

const onPageChange = (page: number) => {
  currentPage.value = page;
};

onMounted(async () => {
  articles.value = (await getArticles());
  articles.value = articles.value.sort((a, b) => dayjs(b.createdAt).valueOf()  - dayjs(a.createdAt).valueOf())
});
</script>

<style scoped lang="scss">
.main {
    padding: 120px 0 140px;
}
</style>

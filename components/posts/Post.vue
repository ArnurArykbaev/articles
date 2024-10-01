<template>
    <div class="post">
        <img :src="post.image" alt="Post image" />
        <h3>{{ post.title }}</h3>
        <p>{{ post.preview }}</p>
        <p>{{ post.description }}</p>
        <p>{{ post.createdAt }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Article } from '~/models/Article';

interface Props {
    post: Article;
}

const props = defineProps<Props>();
</script>

<style scoped>
/* Ваши стили для компонента Post */
</style>

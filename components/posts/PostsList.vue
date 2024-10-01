<template>
    <div class="posts">
        <div v-for="post in props.posts" :key="post.id" class="post-wrapper">
            <Post :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Post from '~/components/posts/Post.vue';
import { Article } from '~/models/Article';

interface Props {
    posts: Article[];
}

const props = defineProps<Props>();
</script>

<style scoped>
/* Ваши стили для компонента PostsList */
</style>

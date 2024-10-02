<template>
    <div class="posts">
        <Post v-for="post in props.posts" :key="post.id" class="post-wrapper" :post="post" />
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

<style scoped lang="scss">
.posts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 32px;
    margin-top: 30px;
}
</style>

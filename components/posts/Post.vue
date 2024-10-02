<template>
    <div class="post">
      <div class="post-image">
        <div class="post-image__inner">
          <img
            :src="post.image"
            @error="onImageError"
            alt="Post Image"
          />
        </div>
      </div>
      <div class="post-description">
        <p>{{ post.preview }}</p>
      </div>
      <a :href="post.id">Read more</a>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import { Article } from '~/models/Article';
  
  interface Props {
    post: Article;
  }
  
  const props = defineProps<Props>();
  
  const onImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
    target.style.backgroundPosition = 'cover';
  };
  </script>
  
  <style scoped lang="scss">
  .post {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-top: 32px;
    row-gap: 12px;
  
    &-image {
      width: 100%;
      max-width: 280px;
      aspect-ratio: 1;
      overflow: hidden;
  
      &__inner {
        width: 100%;
        max-width: 280px;
        aspect-ratio: 1;
        background-image: url('/assets/img/qtim.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: transform 0.3s ease;
  
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  
    &-description {
      display: flex;
      flex-direction: column;
      height: 75px;
    }
  
    a {
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      color: $purple-light;
      height: 20px;
      pointer-events: none;
      cursor: pointer;
    }
  }
  
  .post:hover {
    padding-top: 0;
  
    a {
      display: flex;
      opacity: 1;
      pointer-events: auto;
    }
  
    .post-image__inner {
      transform: scale(1.1);
    }
  }
  </style>
  
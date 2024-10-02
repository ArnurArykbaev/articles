<template>
    <div class="pagination">

        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)"
            :class="{ active: currentPage === page, 'prev-page': page === '<' }" class="page">
            <p v-if="page !== '<'">{{ page }}</p>
            <nextIcon v-else class="prev-page__icon"></nextIcon>
        </button>

        <button @click="goToNextPage" :disabled="currentPage === totalPages" class="next-page page">
            <nextIcon></nextIcon>
        </button>
    </div>
</template>
  
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import nextIcon from '~/assets/img/icons/next.vue';

interface Props {
    totalPages: number;
}

const props = defineProps<Props>();
const emit = defineEmits(['page-change'])

const currentPage = ref(1);

const visiblePages = computed(() => {
    const pages: (number | string)[] = [];
    const startPage = Math.max(currentPage.value - 2, 1);
    const endPage = Math.min(startPage + 4, props.totalPages);

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    if (+pages[0] >= 2) pages[0] = '<'
    return pages;
});

const goToPage = (page: number | string) => {
    console.log('cure', page)
    if (page === '<') goToPreviousPage()
    if (+page >= 1 && +page <= props.totalPages) {
        currentPage.value = +page;
    }
};

const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const goToNextPage = () => {
    if (currentPage.value < props.totalPages) {
        currentPage.value++;
    }
};

watch(currentPage, (newPage) => {
    console.log('Current page:', newPage);
    emit('page-change', newPage)
});
</script>
  
<style scoped lang="scss">
.pagination {
    display: flex;
    gap: 10px;
    margin-top: 20px;

    button {
        background-color: $gray-light;
        border: none;
        cursor: pointer;

        &.active {
            background-color: $black;
            color: white;
        }

        &:disabled {
            cursor: not-allowed;
            background-color: $gray;
        }

        &.page {
            width: 40px;
            aspect-ratio: 1;
            border-radius: 12px;

            p {
                margin: 0;
            }
        }

        &.prev-page,
        &.next-page {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: 1px solid $gray-light;

            .prev-page__icon {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
  
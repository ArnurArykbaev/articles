<template>
    <div class="pagination">

        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
            {{ page }}
        </button>

        <button @click="goToNextPage" :disabled="currentPage === totalPages">
            >
        </button>
    </div>
</template>
  
<script setup lang="ts">
import { computed, ref, watch } from 'vue';

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
    if(+pages[0] >= 2) pages[0] = '<' 
    return pages;
});

const goToPage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        currentPage.value = page;
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
  
<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

button {
    background-color: #f0f0f0;
    border: none;
    padding: 10px;
    cursor: pointer;
}

button.active {
    background-color: #007bff;
    color: white;
}

button:disabled {
    cursor: not-allowed;
    background-color: #e0e0e0;
}
</style>
  
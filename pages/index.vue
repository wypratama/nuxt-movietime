<script setup lang="ts">
import type { CollectionResponse } from '@/types/common.interface'

const { data } = useFetch<CollectionResponse<Entity.Movie[]>>('/api/tmdb/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
</script>

<template>
  <div class="page">
    <div class="page__hero">
      hello
    </div>
    <div class="page__main content">
      <div class="content__sidebar">
        <span>Sort Result By</span>
      </div>
      <div v-if="data" class="content__main">
        <movie-card v-for="movie in data.results" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page__main {
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.content__main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
</style>

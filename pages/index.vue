<script setup lang="ts">
import type { CollectionResponse } from '@/types/common.interface'

const { data } = useLazyFetch<CollectionResponse<Entity.Movie[]>>('/api/tmdb/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
</script>

<template>
  <div class="page">
    <div class="page__hero">
      <movie-slider />
    </div>
    <div class="page__subhero">
      <div class="subhero__content">
        <div>
          <hr>
          <h1>Discover Movies</h1>
        </div>
      </div>
    </div>
    <div class="page__main content">
      <movie-sidebar />
      <div v-if="data" class="content__main">
        <movie-card v-for="movie in data.results" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-top: 100px;
}

.page__subhero {
  background: rgba(255, 255, 255, 0.05);
  height: 333px;
  padding-top: 89px;
}
.page__main {
  max-width: 1200px;
  margin: 0 auto;
}

.subhero__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  hr {
    width: 55%;
    height: 6px;
    border: none;
    background-color: #e74c3c;
    margin: 0;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-block-start: 0;
    margin-block-end: 0;
  }
}

.content {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: -120px;
}

.content__main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
</style>

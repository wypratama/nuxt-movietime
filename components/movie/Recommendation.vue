<script setup lang="ts">
import type { CollectionResponse } from '~/types/common.interface'

const route = useRoute()

const { data: recommendations } = useLazyFetch<CollectionResponse<Entity.Movie[]>>(`/api/tmdb/movie/${route.params.id}/recommendations`)
</script>

<template>
  <div class="movie-recommendation">
    <div class="movie-recommendation__inner">
      <h3>
        RECOMMENDATION MOVIES
      </h3>
      <div v-if="recommendations?.results.length" class="recommendation-list">
        <MovieCard
          v-for="movie in recommendations.results.slice(0, 4)"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <div v-else style="width: 100%; padding: 50px 0;">
        <p style="text-align: center;">
          THERE ARE NO RECOMMENDATION FOR THIS MOVIE
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.movie-recommendation {
  max-width: 1200px;
  margin: 0 auto;
}

.movie-recommendation__inner {
  width: 100%;
  padding: 50px 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 40px;
  }
}

.recommendation-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
  width: 100%;
}
</style>

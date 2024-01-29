<script setup lang="ts">
import { watchOnce } from '@vueuse/core'
import type { ReviewCollectionResponse } from '~/types/common.interface'

const route = useRoute()

const { data: movie, pending } = useLazyFetch<Entity.MovieDetail>(`/api/tmdb/movie/${route.params.id}`)

const { data: reviews, execute } = useLazyFetch<ReviewCollectionResponse<Entity.Review[]>>(`/api/tmdb/movie/${movie.value?.id}/reviews?language=en-US&page=1`, {
  // transform: r => (r as unknown as ReviewCollectionResponse<Entity.Review[]>).results,
  immediate: false,
  server: false,
})

watch(movie, (m) => {
  if (m)
    execute()
})

const movieGenres = computed(() => {
  if (!movie.value)
    return ''
  return movie.value.genres.map(v => v.name).join(', ')
})
</script>

<template>
  <div class="page">
    <div v-if="pending" class="page-loader">
      <span>loading...</span>
    </div>
    <div v-else class="content">
      <div class="content__backdrop">
        <nuxt-img :src="movie?.backdrop_path" provider="tmdb" />
        <div class="content__movie-detail movie-detail">
          <div class="movie-detail__main">
            <div>
              <nuxt-img src="/img/star.svg" provider="local" width="32" height="32" class="hover-card__rating-icon" />
              <span>{{ movie?.vote_average.toFixed(1) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="content__info">
        <nuxt-img :src="movie?.poster_path" provider="tmdb" quality="500" />
        <div class="title-group">
          <span class="title-group__year">{{ getReleaseYear(movie?.release_date || '') }}</span>
          <h1 class="title-group__title">
            {{ movie?.title }}
          </h1>
          <span>{{ movieGenres }}</span>
        </div>
      </div>
      <div class="content__review">
        <div class="review">
          <div class="review__overview">
            <h3>OVERVIEW {{ route.params.id }}</h3>
            <p>{{ movie?.tagline }}</p>
          </div>
          <h3 class="review__title">
            REVIEWS
          </h3>
          <div class="review__list">
            <movie-review-card v-for="review in reviews?.results" :key="review.id" :review="review" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content__backdrop {
  width: 100%;
  height: 488px;
  overflow: hidden;
  position: relative;
}

.content__movie-detail {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.50);
  width: 100%;
}

.content__info {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -220px;
  z-index: 600;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 33px;
}

.movie-detail__main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 23px 0 25px 280px;
}

.title-group {
  color: white;
  padding: 17px 0;
}

.title-group__year {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.title-group__title {
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-block-start: 0;
  margin-block-end: 0;
}

.content__review {
  background-color: white;
  margin-top: -160px;
}

.review {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0;
  color: black;
}

.review__overview {
  padding-left: 280px;
}

.review__title {
  margin-top: 52px;
}

.review__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
}
</style>

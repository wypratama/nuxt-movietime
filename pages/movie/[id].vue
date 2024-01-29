<script setup lang="ts">
import { watchOnce } from '@vueuse/core'
import type { ReviewCollectionResponse } from '~/types/common.interface'

const route = useRoute()

const { data: movie, pending } = useLazyFetch<Entity.MovieDetail>(`/api/tmdb/movie/${route.params.id}`)

const { data: reviews } = useLazyFetch<ReviewCollectionResponse<Entity.Review[]>>(`/api/tmdb/movie/${route.params.id}/reviews?language=en-US&page=1`)

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
        <nuxt-img :src="movie?.backdrop_path" provider="tmdb" class="content__backdrop-image" />
        <div class="content__movie-detail movie-detail">
          <div class="movie-detail__main">
            <div class="movie-detail__rating-group">
              <nuxt-img src="/img/star.svg" provider="local" width="32" height="32" />
              <span class="movie-detail__rating">{{ movie?.vote_average.toFixed(1) }}</span>
              <div class="movie-detail__info-group">
                <span class="text-mute">USER SCORE</span>
                <span class="text-white ">{{ movie?.vote_count }} VOTES</span>
              </div>
              <div class="movie-detail__separator" />
              <div class="movie-detail__info-group">
                <span class="text-mute">STATUS</span>
                <span class="text-white ">{{ movie?.status }}</span>
              </div>
              <div class="movie-detail__separator" />
              <div class="movie-detail__info-group">
                <span class="text-mute">LANGUAGE</span>
                <span class="text-white ">{{ movie?.spoken_languages[0].name }}</span>
              </div>
              <div class="movie-detail__separator" />
              <div class="movie-detail__info-group">
                <span class="text-mute">BUDGET</span>
                <span class="text-white ">{{ movie?.budget }}</span>
              </div>
              <div class="movie-detail__separator" />
              <div class="movie-detail__info-group">
                <span class="text-mute">PRODUCTION</span>
                <span class="text-white ">{{ movie?.production_companies[0].name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content__info">
        <nuxt-img :src="movie?.poster_path" provider="tmdb" quality="500" class="content__movie-poster" />
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
            <h3 class="text-title ">
              OVERVIEW
            </h3>
            <p>{{ movie?.overview }}</p>
          </div>
          <h3 class="review__title text-title ">
            REVIEWS
          </h3>
          <div v-if="reviews?.results.length" class="review__list">
            <movie-review-card v-for="review in reviews?.results.slice(0, 2)" :key="review.id" :review="review" />
          </div>
          <div v-else style="padding: 100px 0; text-align: center;">
            NO REVIEW FOR THIS MOVIE YET
          </div>
        </div>
      </div>

      <movie-recommendation />
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

.content__backdrop-image {
  width: 100%;
}

.content__movie-poster {
  width: 250px;
  height: 375px;
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

.movie-detail__rating-group {
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
}

.movie-detail__rating {
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.movie-detail__info-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.movie-detail__separator {
  border-left: 1px solid rgba(255, 255, 255, 0.20);;
  height: 41px;
  margin-left: 33px;
  margin-right: 33px;
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

.text-title {
  color: #F00;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
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
  margin-top: 100px;
}

.review__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
}

.text-mute {
  color: rgba(255, 255, 255, 0.50);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}

.text-white {
  color: #FFF;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}
</style>

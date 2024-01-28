<script setup lang="ts">
const route = useRoute()

const { data: movie, pending } = useLazyFetch<Entity.MovieDetail>(`/api/tmdb/movie/${route.params.id}`)

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
          <span class="title-group__year">{{ getReleaseYear(movie?.release_date) }}</span>
          <h1 class="title-group__title">
            {{ movie?.title }}
          </h1>
          <span>{{ movieGenres }}</span>
        </div>

        <div class="content__review">
          content review
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
  // position: relative;
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
  // position: relative;
}
</style>

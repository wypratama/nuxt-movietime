<script setup lang="ts">
const { movie } = defineProps<{
  movie: Entity.Movie
}>()

const { list: genreCollection } = useGenre()
const firstGenre = computed(() => genreCollection.value.get(movie.genre_ids[0]))

const imageUrl = computed(() => {
  return `https://image.tmdb.org/t/p/w500${movie.poster_path}`
})
</script>

<template>
  <div class="slider-card">
    <img :src="imageUrl" alt="">
    <div class="slider-card-info">
      <div>
        <nuxt-img src="/img/star.svg" provider="local" width="16" height="16" class="slider-card-info__rating-icon" />
        <span id="vote-average">
          {{ movie.vote_average.toFixed(1) }}
        </span>
      </div>
      <h2>
        {{ movie.title }}
      </h2>
      <div>
        <span>
          {{ getReleaseYear(movie.release_date) }}
        </span>
        <h1>.</h1>
        <span v-if="movie && firstGenre">
          {{ firstGenre.name }}
        </span>
      </div>

      <p>
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-card {
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 243px;
    height: auto;
  }

  div {
    background-color: black;
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    margin: 0.2rem 0;
  }

  h1 {
    position: relative;
    top: -10px;
  }

  p {
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: auto;
    -webkit-box-orient: vertical;
    margin-top: 0.3rem;
  }
}

.slider-card-info {
  width: 299px;
  height: 324px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 2rem;
  text-align: left;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;
  }
}

.slider-card-info__rating-icon {
  width: 16px !important;
}

#vote-average {
  font-size: 18px;
  font-weight: 800;
}
</style>

<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const { movie, favorites } = defineProps<{
  movie: Entity.Movie
  favorites: any
}>()

const { list: genreCollection } = useGenre()
const firstGenre = computed(() => genreCollection.value.get(movie.genre_ids[0]))

const target = ref(null)

const { isOutside } = useMouseInElement(target)

function onClickView() {
  navigateTo(`/movie/${movie.id}`)
}

function onClickFavorite() {
  favorites.set(movie.id, movie)
}

function onClickRemoveFavorite() {
  favorites.delete(movie.id)
}

const isFavorited = computed(() => favorites.has(movie.id))
</script>

<template>
  <div ref="target" class="card">
    <div class="card__image">
      <nuxt-img
        v-if="movie.poster_path"
        placeholder="/img/poster-holder.svg"
        :src="movie.poster_path"
        provider="tmdb"
        quality="500"
        class="card__image-poster"
      />
      <img
        v-else
        src="/img/poster-holder.svg"
        class="card__image-poster"
      >
      <div v-if="!isOutside" class="card__image-hover hover-card">
        <div class="hover-card__rating">
          <nuxt-img src="/img/star.svg" provider="local" width="32" height="32" class="hover-card__rating-icon" />
          <span class="hover-card__rating-number">{{ movie.vote_average.toFixed(1) }}</span>
        </div>
        <span class="hover-card__genre">{{ firstGenre?.name }}</span>
        <div class="hover-card__action">
          <common-button variant="primary" @click="onClickView">
            VIEW
          </common-button>
          <common-button v-if="!isFavorited" variant="outlined" @click="onClickFavorite">
            ADD
          </common-button>
          <common-button v-else variant="secondary" @click="onClickRemoveFavorite">
            ADDED
          </common-button>
        </div>
      </div>
    </div>
    <span class="card__title">{{ movie.title }}</span>
    <span class="card__subtitle">{{ getReleaseYear(movie.release_date) }}</span>
    <span class="card__score">{{ movie.vote_average.toFixed(1) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
}

.card__image {
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
}

.card__image-poster {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.card__image-hover {
  position: absolute;
  background: rgba(0, 0, 0, 0.80);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__title {
  margin-top: 13px;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card__subtitle {
  color: #929292;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card__score {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: rgba(30, 35, 43, 0.80);
  width: 48px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hover-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
}

.hover-card__rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.hover-card__rating-number {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.hover-card__genre {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.hover-card__action {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
</style>

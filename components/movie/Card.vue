<script setup lang="ts">
const { movie } = defineProps<{
  movie: Entity.Movie
}>()

const release_year = computed(() => movie.release_date.split('-')[0])
</script>

<template>
  <div class="card">
    <nuxt-img
      :src="movie.poster_path"
      provider="tmdb"
      quality="500"
      placeholder="https://placehold.co/220x300?text=Moovie+Time"
    />
    <span class="card__title">{{ movie.title }}</span>
    <span class="card__subtitle">{{ release_year }}</span>
    <span class="card__score">{{ movie.vote_average.toFixed(1) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
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
</style>

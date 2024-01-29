<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const { data: trendings } = useLazyFetch('/api/tmdb/trending/movie/day', {
  transform: v => v.results,
})

const options = {
  perPage: 3,
  perMove: 1,
  type: 'loop',
  autoplay: true,
  interval: 4000,
  autoWidth: true,
  gap: '2em',
  focus: 'center',
  arrows: false,
  classes: {
    page: 'splide__pagination__page nav-button',
  },
} as const
</script>

<template>
  <div class="home-slider">
    <ClientOnly>
      <Splide v-if="trendings" :trendings="trendings" :options="options">
        <SplideSlide v-for="movie in trendings" :key="movie.id">
          <MovieSliderCard :movie="movie" />
        </SplideSlide>
      </Splide>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
@import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

.home-slider {
  margin-top: 12vh;
  margin-bottom: 4vh;
  gap: 3rem;
}

.splide {
  padding: 4em 0;

  &:hover {
    cursor: pointer;
  }
}

.splide__pagination {
  bottom: 0;
  gap: 0.2rem;
}

.nav-button {
  border-radius: 100%;
  width: 10px;
  height: 10px;
}

.splide__pagination__page.is-active {
  background: #e74c3c;
  width: 50px;
  border-radius: 25px;
}
</style>

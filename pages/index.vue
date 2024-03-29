<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import type { CollectionResponse, SortPreference } from '@/types/common.interface'

definePageMeta({
  scrollToTop: true,
})

useHead({
  title: 'Moovie Time | Nuxt 3 TMDB Client',
})

const page = ref(1)
const genres = ref([])
const sortPref = ref<SortPreference>('popularity.desc')

const genreQuery = computed(() => {
  if (!genres.value.length)
    return null
  return genres.value.join(',')
})

const { data } = useLazyFetch<CollectionResponse<Entity.Movie[]>>('/api/tmdb/discover/movie', {
  query: {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page,
    sort_by: sortPref,
    with_genres: genreQuery,
  },
})

function onLoadMore() {
  page.value = 2
}

const favorites = useStorage('favorites', new Map())
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

        <div>
          <span>My Movies</span>
          <span class="user-movie">{{ favorites.size }} movies</span>
        </div>
      </div>
    </div>
    <div class="page__main content">
      <movie-sidebar v-model:genres="genres" v-model:sort="sortPref" />
      <div class="content__inner">
        <div v-if="data" class="content__main">
          <movie-card v-for="movie in data.results" :key="movie.id" :movie="movie" :favorites="favorites" />
        </div>
        <common-button variant="primary" @click="onLoadMore">
          Load More
        </common-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-top: 100px;
  margin-bottom: 80px;
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

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  >div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    align-self: flex-end;
  }

  .user-movie {
    border-radius: 32px;
    background: rgba(0, 0, 0, 0.20);
    padding: 6px 18px;
  }
}

.content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 30px;
  margin-top: -120px;
}

.content__inner {
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
}

.content__main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
</style>

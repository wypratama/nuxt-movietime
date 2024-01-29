<script setup lang="ts">
import { useVModels } from '@vueuse/core'
import type { SortPreference } from '~/types/common.interface'

const props = defineProps<{
  genres: Entity.Genre[]
  sort: SortPreference
}>()

const emit = defineEmits(['update:genres', 'update:sort'])

const { data, execute } = useGenre()

const { genres, sort } = useVModels(props, emit)

onMounted(execute)
</script>

<template>
  <div class="sidebar">
    <div class="sort__title">
      <span class="text-title">Sort Result By</span>
    </div>

    <div class="sort__select">
      <common-select v-model="sort" />
    </div>

    <div class="genre">
      <div class="genre__title">
        <span class="text-title">Genres</span>
      </div>
      <div class="genre__options">
        <common-checkbox v-for="genre in data?.genres" :key="genre.id" v-model="genres" :genre="genre" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 240px;
  border-radius: 8px;
  background: linear-gradient(180deg, #0E1723 0%, rgba(30, 35, 42, 0.00) 100%);
  padding: 20px 0;
  align-self: start;
}

.text-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.sort__title {
  padding: 11px 18px;
  border-bottom: 1px solid hsla(0,0%,100%,.07);
}

.sort__select {
  padding: 11px 18px;
}
.genre__title {
  padding: 11px 18px;
  border-bottom: 1px solid hsla(0,0%,100%,.07);
  border-top: 1px solid hsla(0,0%,100%,.07);
  margin: 16px 0;
}

.genre__options {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 18px;
}
</style>

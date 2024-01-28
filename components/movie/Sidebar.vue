<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps<{
  genres: Entity.Genre[]
}>()

const emit = defineEmits(['update:genres'])

const { data, execute } = useGenre()

const { genres } = useVModels(props, emit)

onMounted(execute)
</script>

<template>
  <div class="sidebar">
    <span>Sort Result By</span>

    <span>{{ genres }}</span>

    <div class="genre">
      <div class="genre__title">
        <span>Genres</span>
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
  padding: 20px 18px;
  align-self: start;
}

.genre__title {
  padding: 11px 0;
  border-bottom: 1px solid hsla(0,0%,100%,.07);
  border-top: 1px solid hsla(0,0%,100%,.07);
  margin: 16px 0;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.genre__options {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<script setup lang="ts">
const { data } = useGenre()
</script>

<template>
  <div class="sidebar">
    Sort Result By

    <div>
      <span>Genres</span>
      <div class="genre__options">
        <common-checkbox v-for="genre in data?.genres" :key="genre.id" :genre="genre" />
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
}

.genre__options {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

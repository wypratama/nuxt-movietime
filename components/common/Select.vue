<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <select v-model="model" class="select">
    <option value="popularity.asc">
      Popularity Ascending
    </option>
    <option value="popularity.desc">
      Popularity Descending
    </option>
    <option value="primary_release_date.asc">
      Release Date Ascending
    </option>
    <option value="primary_release_date.desc">
      Release Date Descending
    </option>
    <option value="vote_average.asc">
      Rating Ascending
    </option>
    <option value="vote_average.desc">
      Rating Descending
    </option>
  </select>
</template>

<style lang="scss" scoped>
.select {
  width: 100%;
  border-radius: 4px;
  background: rgba(224, 224, 224, 0.13);

  color: #E5E5E5;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 8px;
}
</style>

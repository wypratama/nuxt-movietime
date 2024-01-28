<script setup lang="ts">
const props = defineProps<{
  variant: 'primary' | 'outlined' | 'secondary'
}>()

const classProperty = computed(() => {
  return {
    primary: 'movie-button--primary',
    outlined: 'movie-button--outlined',
    secondary: 'movie-button--secondary',
  }[props.variant] || 'movie-button--primary'
})
</script>

<template>
  <button class="movie-button" :class="classProperty">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.movie-button {
  min-width: 107px;
  color: #E5E5E5;
  padding: 9px 32px;
  border-radius: 32px;
  border: none;
  transition: all .3s;

  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: #1E232A;
    background-color: #FFF;
    border: 1px solid #FFF;
  }
}

.movie-button--primary {
  background-color: #F00;
  border: 1px solid #F00;
}

.movie-button--outlined {
  background-color: transparent;
  border: 1px solid #FFF;
}
</style>

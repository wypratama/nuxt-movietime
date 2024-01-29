<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/**
-------------------------------------------------------------------------------
CSS RESET
-------------------------------------------------------------------------------
- put on entry point to make sure it affects all pages and layouts

*/
@import 'node_modules/modern-normalize/modern-normalize.css';

body {
  font-family: 'Montserrat', sans-serif;
  color: #E5E5E5;
  background-color: #1E232B;
}

.movie-list-enter-from,
.movie-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.movie-list-leave-active {
  position: fixed;
}
</style>

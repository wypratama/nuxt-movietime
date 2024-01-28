<script setup lang="ts">
const { genre } = defineProps<{
  genre: Entity.Genre
}>()

const model = defineModel()
</script>

<template>
  <div class="checkbox">
    <span>{{ genre.name }}</span>

    <div class="content">
      <label class="checkBox">
        <input :id="`checkbox-${genre.id}`" v-model="model" type="checkbox" :value="genre.id">
        <div class="transition" />
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.clear {
  clear: both;
}

.checkBox {
  display: block;
  cursor: pointer;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px #fff;
}

.checkBox div {
  width: 60px;
  height: 60px;
  background-color: #fff;
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type=checkbox]:checked + div {
  left: -10px;
  top: -10px;
}

.checkBox input[type=checkbox] {
  position: absolute;
  left: 50px;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}
</style>

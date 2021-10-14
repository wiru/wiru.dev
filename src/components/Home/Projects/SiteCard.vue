<template>
  <router-link :to="link">
    <div class="flex-container">
      <div class="absolute-container" :style="{ backgroundColor: bgColor }">
        <div class="imgBox" :style="{ backgroundColor: bgColor }">
          <img :src="require('@/assets/' + imgName + '')" :alt="altText">
        </div>
        <div class="content">
          <span class="goToText">view on wiru.dev</span>
          <img src="../../../assets/launch-white.svg" alt="Link Icon">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  props: ['imgName', 'bgColor', 'link'],
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.flex-container {
  display: flex;
  padding: 10px;
}
.absolute-container {
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  border: 3px solid white;
  border-radius: 3px;
    .content {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $primary;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    height: 80px;
    width: 0;
    transition: 1s;
  }
  .imgBox {
    display: flex;
    align-items: center;
    width: 300px;
    height: 80px;
  }
  .imgBox img {
    width: 100%;
  }
  .goToText {
    white-space: nowrap;
    padding: 0 10px 0 10px;
    color: $off-white;
    font-size: $p-font-size;
  }
  .logo {
    height: 30px;
  }
}
.absolute-container:hover .content {
  width: 300px;
}
</style>

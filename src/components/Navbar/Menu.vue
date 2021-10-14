<template>
  <nav @click="store.methods.toggleSidebar">
    <span></span>
    <span></span>
    <span></span>
    <div class="menu">
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'Menu',
  components: {
  },
  setup() {
    const store = inject('store');
    return { store };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
nav {
  position: fixed;
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  cursor: pointer;
}
.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  border-top: 60px solid $tertiary;
  border-left: 25px solid transparent;
  filter: drop-shadow(4px 4px 10px rgba(0,0,0,.5));
}
span {
  position: relative;
  width: 40px;
  height: 5px;
  top: 0;
  right: 0;
  margin-top: 10px;
  background: $off-white;
  display: block;
  z-index: 2;
  margin-left: auto;
  margin-right: 20px;
}
</style>

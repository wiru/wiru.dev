<template>
  <nav>
    <Menu/>
    <Navigation/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './Menu.vue';
import Navigation from './Navigation.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    Menu,
    Navigation,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
nav {
  position: fixed;
  z-index: 999999;
}
</style>

<template>
  <Navbar/>
  <router-view v-slot="{ Component }">
  <div>
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </div>
  </router-view>
  <div></div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import store from './store';
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  setup() {
    provide('store', store);
    return { store };
  },
});
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: $main-font;
}
html, body {
  background: $primary;
}
p {
  font-size: min(max(20px, 3vw), 40px);
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  padding: 20px;
}
span {
  font-size: $h-font-size;
  font-family: 'PT Sans Narrow', sans-serif;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.navbar {
  display: fixed;
  width: 100%;
  z-index: 1;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-active {
  transition: all 2s ease-out;
}
.route-leave-active {
  transition: all 1s ease-in;
}
</style>

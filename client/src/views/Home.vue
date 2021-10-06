<template>
  <div class="home">
    <Logo />
    <Splash />
    <Framework />
    <Reactive />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import Logo from '../components/Home/Logo.vue';
import Splash from '../components/Home/Splash.vue';
import Framework from '../components/Home/Framework.vue';
import Reactive from '../components/Home/Reactive.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Logo,
    Splash,
    Framework,
    Reactive,
  },
  setup() {
    const store = inject('store');
    window.scrollTo(0, 0);
    return { store };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.home {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
}
</style>

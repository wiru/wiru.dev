<template>
  <div class="home">
    <Name />
    <Space />
    <Splash />
    <TriangleL />
    <Projects />
    <TriangleR />
    <Reactive />
    <TriangleL />
    <Framework />
    <TriangleR />
    <Reactive />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import Name from '../components/Home/Name.vue';
import Space from '../components/Home/Space.vue';
import Splash from '../components/Home/Splash.vue';
import TriangleL from '../components/Home/TriangleL.vue';
import TriangleR from '../components/Home/TriangleR.vue';
import Projects from '../components/Home/Projects.vue';
import Framework from '../components/Home/Framework.vue';
import Reactive from '../components/Home/Reactive.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Name,
    Space,
    Splash,
    TriangleL,
    TriangleR,
    Projects,
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

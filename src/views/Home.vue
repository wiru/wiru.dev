<template>
  <div class="home">
    <Name />
    <Space />
    <TriangleL />
    <Projects />
    <TriangleR />
    <Reactive />
    <TriangleL />
    <TechStack />
    <TriangleR />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import Name from '../components/Home/Name.vue';
import Space from '../components/Home/Space.vue';
import TriangleL from '../components/Home/TriangleL.vue';
import TriangleR from '../components/Home/TriangleR.vue';
import Projects from '../components/Home/Projects/Projects.vue';
import TechStack from '../components/Home/TechStack.vue';
import Reactive from '../components/Home/Reactive.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Name,
    Space,
    TriangleL,
    TriangleR,
    Projects,
    TechStack,
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
  height: 100%;
}
</style>

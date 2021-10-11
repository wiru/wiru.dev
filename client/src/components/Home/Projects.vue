<template>
  <section>
        <span>Projects</span>
        <p>More coming soon!</p>
        <p>Reactive RSS Feed</p>
        <p>GitHub mini-projects</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
section {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
  background-color: $secondary;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>

<template>
  <section>
    <a href="williamlmsaville@gmail.com">contact</a>
    <a href="http://github.com/wiru">GitHub</a>
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
  justify-content: center;
  padding: 20px;
  color: $off-white;
  background-color: $tertiary;
}
a {
  padding: 5px;
  text-decoration: none;
  color: $off-white;
  font-size: 1.2rem;
}
</style>

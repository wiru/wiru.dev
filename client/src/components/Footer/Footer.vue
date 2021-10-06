<template>
  <section>
    <a href="&#119;&#105;&#108;&#108;&#105;&#097;&#109;&#108;&#109;
    &#115;&#097;&#118;&#105;&#108;&#108;&#101;&#064;&#103;
    &#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">contact</a>
    <a href="http://">GitHub</a>
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

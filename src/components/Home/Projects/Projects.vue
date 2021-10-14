<template>
  <div class="container">
    <section>
      <span>Projects</span>
      <p>More coming soon!</p>
    </section>
    <section>
      <SiteCard :link="'feed'" imgName="rss-logo.png" bgColor="rgb(155, 190, 255)"/>
      <GitHubCard link="https://github.com/wiru/get-guides" imgName="gg-logo.png" bgColor="rgb(216, 0, 0)"/>
      <GitHubCard link="https://github.com/wiru/Rest-Finder" imgName="rf-logo.png" bgColor="green"/>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteCard from './SiteCard.vue';
import GitHubCard from './GitHubCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    GitHubCard,
    SiteCard,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $secondary;
}
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
span {
  color: $primary;
}
p {
  color: $primary;
}
</style>

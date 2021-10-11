<template>
  <section>
        <span>Tech Stack</span>
        <p>wiru.dev is powered by</p>
        <div class="anim-container">
          <img class="logo" src="../../assets/vue-logo.svg" alt="Vue Logo">
          <img class="logo delay" src="../../assets/typescript-logo.svg" alt="Typescript Logo"
          stroke="white">
          <img class="logo" src="../../assets/sass-logo.svg" alt="Sass Logo">
        </div>
        <p>with no other dependancies</p>
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
.anim-container {
  display: flex;
  height: fit-content;
  justify-content: right;
  padding: 20px;
  width: 70vw;
}
.logo {
  animation: jiggle 4s linear forwards infinite;
  width: 10vw;
  height: auto;
  min-width: 80px;
}
.delay {
  animation-delay: .5s;
}
img {
  height: 100px;
}
span {
  color: $primary-dark;
}
p {
  width: 90vw;
}

@keyframes jiggle {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, 1px) rotate(-1deg); }
}

@media only screen and (min-width: 600px) {
  p {
    width: 70vw;
  }
}
</style>

<template>
  <section>
    <img src="@/assets/cell-phone.png" alt="Cell Phone">
    <span>Reactive Design</span>
    <p>Check out this site on your mobile too!</p>
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
  background-color: $primary;
  height: fit-content;
  width: 90vw;
  padding: 20px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  align-self: center;
  justify-items: center;
}
span {
  color: $secondary;
  text-align: center;
}
p {
  color: $off-white;
}
img {
  width: min(max(100px, 15vw), 300px);
  grid-row: 1 / -1;
  animation: wiggle 2s linear forwards infinite;
  // transform-origin: bottom;
  padding-bottom: 10px;
}
@keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}
@media only screen and (min-width: 600px) {
  section {
    grid-template-columns: 1fr auto;
    width: 70vw;
  }
  img {
    padding-bottom: 0;
  }
}

</style>

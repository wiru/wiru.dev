<template>

  <main class="viewport">
    <div class="parallax_wrapper">

      <div class="parallax_group intro_screen" id="intro">INTRO</div>

      <div class="parallax_group" id="group-1">
        <div class="parallax_layer base_layer">BASE</div>
        <div class="parallax_layer mid_layer">MID1</div>
      </div>

      <div class="parallax_group" id="group-2">
        <div class="parallax_layer mid_layer">MID2</div>
        <div class="parallax_layer top_layer">TOP</div>
      </div>

      <div class="parallax_group outro_screen" id="outro">OUTRO</div>

    </div>
  </main>

</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

div {
  font-size: 2em;
}

.parallax_wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective-origin: 0 0;
  perspective: 300px;

  .intro_screen {
    height: 100vh;
    background-color: rgb(255, 101, 101);
    @include align-center;
  }

  .outro_screen {
    height: 100vh;
    background-color: rgb(101, 255, 147);
    @include align-center;
  }

  .parallax_group {
    position: relative;
    height: 100vh;
    transform-style: preserve-3d;

    .parallax_layer {
      position: absolute;
      inset: 0;
      @include align-center;

    }

    .base_layer {
      transform: translateZ(-300px);
      transform-origin: 0 0;
    }
  }
  #intro {

  }
  #group-1 {

  }
  #group-1 > .base_layer {
    background-color: gray;
  }
  #group-2 {

  }
  #group-2 > .mid_layer {
    background-color: blueviolet;
  }
  #outro {

  }
}

</style>

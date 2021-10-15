<template>

  <div class="parallax_wrapper">

    <div class="parallax_group" id="group-1">
      <div class="parallax_layer" :style="posData" id="planet_layer">
        <img src="@/assets/planet.svg" alt="">
      </div>
      <div class="parallax_layer" ref="baseLayer" id="base_layer">BASE</div>
      <div class="parallax_layer mid_layer">MID1</div>
    </div>

    <div class="parallax_group" id="group-2">
      <div class="parallax_layer mid_layer">MID2</div>
      <div class="parallax_layer top_layer">TOP</div>
    </div>

  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, reactive, nextTick,
} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const baseLayer = ref();
    const posData = reactive({
      origin: 0,
      current: 0,
      marginRight: '',
    });
    function movePlanets() {
      console.log(posData.marginRight);
      posData.current = baseLayer.value.getBoundingClientRect().top;
      posData.marginRight = `${(posData.origin - posData.current) / 2}px`;
      window.requestAnimationFrame(movePlanets);
    }
    onMounted(() => {
      nextTick(() => {
        posData.origin = baseLayer.value.getBoundingClientRect().top;
        // console.log(planet.value);
        window.requestAnimationFrame(movePlanets);
      });
    });
    return { baseLayer, posData };
  },
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
  perspective: 300px;

  .parallax_group {
    position: relative;
    height: 100vh;
    transform-style: preserve-3d;

    #planet {
      height: 200px;
      width: 200px;
    }

    .parallax_layer {
      position: absolute;
      inset: 0;
      @include align-center;

    }

    #base_layer {
      transform: translateZ(-400px);
    }

    .mid_layer {
      transform: translateZ(100px);
    }
  }
  #intro {

  }
  #group-1 {

  }
  #group-1 > #base_layer {
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

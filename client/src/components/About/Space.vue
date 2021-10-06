<template>
  <section>
    <div id="shooting-stars">
    <i></i>
    <i></i>
    <i></i>
    </div>
    <img id="stars" ref="stars" src="@/assets/stars.svg" alt="">
    <img id="planet" ref="planet" src="@/assets/planet.svg" alt="">
    <img id="foreground" src="@/assets/Foreground.png" alt="">
    <h2 id="about_me" :style="styleObject">About Me</h2>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, reactive,
} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const stars = ref();
    const planet = ref();
    const styleObject = reactive({ marginTop: '' });
    onMounted(() => {
      window.addEventListener('scroll', () => {
        const scr = window.scrollY;
        stars.value.style.left = `${scr / 10}px`;
        planet.value.style.bottom = `-${scr * 0.2}px`;
        planet.value.style.right = `-${scr * 0.5}px`;
        styleObject.marginTop = `${scr * 1.5}px`;
      });
    });
    return { stars, planet, styleObject };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

// SPACE SCENE (BACKGROUND / STARS / PLANET)
section {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: min(max(500px, 100vh));
  overflow: hidden;
  width: 100%;
}
section:before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 10px;
  width: 100%;
  background-image: linear-gradient(to top, rgb(43,103,119,1), rgb(43,103,119,0));
  z-index: 3;
}
#stars {
  position: absolute;
  bottom: 50px;
  min-height: 100vh;
  min-width: 100vw;
  transform: scale(1.2);
}
#planet {
  position: absolute;
  max-width: 70vw;
  position: relative;
  margin-top: 100vh;
  z-index: 0;
  box-shadow: 0px 0px 50px rgb(191, 255, 179);
  border-radius: 50%;
}
#foreground {
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
  height: auto;
  width: 100%;
  min-width: 300px;
  z-index: 2;
}
#about_me {
  position: absolute;
  margin-top: 0px;
  color: $off-white;
  font-size: min(max(60px, 10vw), 120px);
  font-family: $main-font;
  z-index: 1;
}

// SHOOTING STARS CSS ANIMATION
#shooting-stars{
  position: absolute;
  width: 100%;
  height: 100%;
}
#shooting-stars i {
  position:absolute;
  top: -20px;
  z-index: 1;
  height: 20px;
  width: 1px;
  background-color: $white;
  animation-timing-function: ease-in-out;
}
#shooting-stars i:nth-child(1){
  left: 25vw;
  background-color: #fff;
  animation: path1 3s 1s infinite;
}
#shooting-stars i:nth-child(3){
  left: 50vw;
  animation: path2 5s 3s infinite;
}
#shooting-stars i:nth-child(2){
  left: 0vw;
  animation: path3 7s 7s infinite;
}
@keyframes path1 {
  0% {
    transform: translate3d(0px,0px,0px) rotate(-20deg);
  }
  25% {
    transform:
    translate3d(450px,900px,0) rotate(-20deg);
    opacity: 0;
  }
  100% {
    transform:
    translate3d(450px,900px,0) rotate(-20deg);
    opacity: 0;
  }
}

@keyframes path2 {
  0% {
    transform: translate3d(0,0,0) rotate(-20deg);
  }

  15% {
    transform: translate3d(430px,640px,0) rotate(-20deg);
    opacity: 0;
  }

  100% {
    transform: translate3d(430px,640px,0) rotate(-20deg);
    opacity: 0;
  }
}

@keyframes path3 {
  0% {
    transform:translate3d(0,0,0) rotate(-50deg);
  }
  15% {
    transform:translate3d(700px,580px,0) rotate(-50deg);
    opacity: 0;
  }
  100% {
    transform:translate3d(700px,580px,0) rotate(-50deg);
    opacity: 0;
  }
}
</style>

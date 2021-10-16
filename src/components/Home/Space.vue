<template>
  <section id="container" ref="container">
    <div id="shooting-stars">
    <i></i>
    <i></i>
    <i></i>
    </div>
    <img id="stars" ref="stars" src="@/assets/stars.svg" alt="">
    <img id="planet" ref="planet" src="@/assets/planet.png" alt="">
    <img id="redGiant" ref="redGiant" src="@/assets/red-giant.png" alt="">
    <img id="foreground" src="@/assets/foreground.png" alt="">
    <h2 id="about_me" ref="aboutMe"><span class="w">
      w</span>elcome to <span class="w">
      w</span>iru.dev</h2>
  </section>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref,
} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const container = ref();
    const stars = ref();
    const planet = ref();
    const redGiant = ref();
    const aboutMe = ref();
    onMounted(() => {
      container.value.style.height = `${window.innerHeight}px`;
      stars.value.style.height = `${window.innerHeight}px`;
      window.addEventListener('scroll', () => {
        const scr = window.scrollY;
        console.log(`${window.innerHeight}px`);
        stars.value.style.transform = `scale(1.2) translateX(-${scr / 10}px)`;
        redGiant.value.style.transform = `translateX(-${scr * 0.2}px) translateY(-${scr * 0.2}px)`;
        planet.value.style.transform = `translateX(${scr * 0.5}px) translateY(${scr * 0.3}px)`;
        aboutMe.value.style.transform = `translateY(${scr * 1.5}px)`;
      });
    });
    return {
      container, stars, planet, redGiant, aboutMe,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
// SPACE SCENE (BACKGROUND / STARS / PLANET)
section {
  display: flex;
  flex-direction: column;
  position: sticky;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}
section:before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 15px;
  width: 100%;
  background-image: linear-gradient(to top, ($secondary), ($secondary-fade));
  z-index: 3;
}
#stars {
  position: absolute;
  min-width: 100vw;
  transform: scale(1.2);
}
img {
  transition: all 0s ease;
}
#planet {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-top: 50vh;
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
  box-shadow: 0px 0px 50px rgb(191, 255, 179);
  border-radius: 50%;
  z-index: 1;
}
#redGiant {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-top: 50vh;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  box-shadow:
  0px 0px 10px rgb(255, 102, 0),
  0px 0px 20px rgb(255, 102, 0),
  0px 0px 40px rgb(255, 102, 0),
  0px 0px 80px rgb(255, 102, 0),
  0px 0px 100px rgb(255, 102, 0),;
  border-radius: 50%;
  z-index: 0;
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
  text-align: center;
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
.w{
  font-size: 1em;
  color: $primary;
}
</style>

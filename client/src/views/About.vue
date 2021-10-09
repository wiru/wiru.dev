<template>
  <div class="flex-page-wrapper">
    <Space/>
    <div id="triggerBox1"></div>
    <section class="content-container top">
      <div class="left-content">
        <blockquote class="top-quote animSet1">
          I love sports, chess, games, and
          hanging out with friends and family.
          At a young age I was heavily involved in
          the UK Martial Arts scene, fighting at a
          National and European level.
        </blockquote>
        <img class="img1 animSet1" src="../assets/fun.jpg" alt="">
      </div>
      <img class="img2 animSet1" src="../assets/code.jpg" alt="">
    </section>
    <div id="triggerBox2"></div>
    <section class="content-container bottom">
      <div class="left-content">
        <img class="img3 animSet2" src="../assets/fun.jpg" alt="">
        <blockquote class="bottom-quote animSet2">
          I love sports, chess, games, and
          hanging out with friends and family.
          At a young age I was heavily involved in
          the UK Martial Arts scene, fighting at a
          National and European level.
        </blockquote>
      </div>
      <img class="img4 animSet2" src="../assets/code.jpg" alt="">
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Space from '../components/About/Space.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Space,
  },
  setup() {
    window.scrollTo(0, 0);

    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer1 = new IntersectionObserver((trigger) => {
      const elements = document.querySelectorAll('.animSet1');
      if (trigger[0].isIntersecting) {
        elements.forEach((el) => {
          el.classList.add('visible');
        });
      }
    }, options);

    const observer2 = new IntersectionObserver((trigger) => {
      const elements = document.querySelectorAll('.animSet2');
      if (trigger[0].isIntersecting) {
        elements.forEach((el) => {
          el.classList.add('visible');
        });
      }
    }, options);

    onMounted(() => {
      const triggerBox1 = document.getElementById('triggerBox1');
      const triggerBox2 = document.getElementById('triggerBox2');
      if (triggerBox1) {
        observer1.observe(triggerBox1);
      }
      if (triggerBox2) {
        observer2.observe(triggerBox2);
      }
    });
    return { observer1, observer2, options };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.flex-page-wrapper {
  display: flex;
  flex-direction: column;
}
.content-container {
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
}
.top {
  background-image: url(../assets/diagonal.svg);
}
.bottom {
  background-image: url(../assets/diagonal-left-btm.svg);
}
.left-content {
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
#triggerBox1 {
  position: relative;
  height: 100px;
  margin: -1px 0 -1px 0;
  background-color: $primary;
}
#triggerBox2 {
  position: relative;
  height: 200px;
  margin: -1px 0 -1px 0;
  background-color: $secondary;
}
blockquote {
  width: 35%;
  opacity: 0;
  transition: transform 2s ease, opacity 3s ease;
  font-size: min(max(1px, 2.5vw), 30px);
}
.top-quote {
  transform: translateX(50%);
  text-align: right;
  padding-right: 3vw;
  color: $secondary;
}
.bottom-quote {
  transform: translateX(-50%);
  text-align: left;
  padding-left: 3vw;
  color: $primary;
}
img {
  // mask-size: 100% 100%;
  opacity: 0;
  transition: transform 2s ease, opacity 3s ease;
  will-change: transform, opacity;
  min-height: 100%;
  background-color: $secondary;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.img1 {
  // mask-image: url(../assets/white-overlay-stagger.svg);
  width: 40%;
  transform: translateX(-50%);
}
.img2 {
  // mask-image: url(../assets/white-overlay-stagger-right.svg);
  width: 30%;
  margin-right: 10%;
  transform: translateX(50%);
}
.img3 {
  // mask-image: url(../assets/white-overlay-stagger.svg);
  width: 40%;
  transform: translateX(-50%);
}
.img4 {
  // mask-image: url(../assets/white-overlay-stagger-right.svg);
  width: 30%;
  margin-right: 10%;
  transform: translateX(50%);
}
.visible {
  opacity: 1;
  transform: none;
}
</style>

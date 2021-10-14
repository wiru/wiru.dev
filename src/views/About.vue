<template>
  <div class="flex-page-wrapper">
    <Logo />
    <Splash />
    <section class="content-container top">
      <div id="triggerBox1"></div>
      <div class="content">
        <blockquote class="top-quote animSet1">
          After graduating from UCLan in the UK I moved to Japan to
          teach English for a few years. Then I met my wonderful wife
          and decided to pursue a career in programming. I joined
          Code Chrysalis Advanced Programming course and am looking
          for a long term role in Japan.
        </blockquote>
        <img class="img1 animSet1" src="../assets/fun.jpg" alt="">
      </div>
    </section>
    <section class="skills">
      <span class="header">What can I do?</span>
      <div class="icon-container">
        <img class="icons js" src="../assets/Javascript-logo.svg" alt="">
        <img class="icons ts" src="../assets/typescript-logo.svg" alt="">
        <img class="icons vue" src="../assets/vue-logo.svg" alt="">
        <img class="icons react" src="../assets/react-logo.svg" alt="">
        <img class="icons node" src="../assets/Node.js_logo.svg" alt="">
        <img class="icons gql" src="../assets/graphql-logo.svg" alt="">
        <!-- <img class="icons" src="../assets" alt="">
        <img class="icons" src="../assets" alt="">
        <img class="icons" src="../assets" alt="">
        <img class="icons" src="../assets" alt="">
        <img class="icons" src="../assets" alt="">
        <img class="icons" src="../assets" alt=""> -->
      </div>
    </section>
    <section class="content-container bottom">
      <div id="triggerBox2"></div>
      <div class="content">
        <img class="img3 animSet2" src="../assets/fun.jpg">
        <blockquote class="bottom-quote animSet2">
          I am located in Tokyo, 5 minutes from Shibuya. I have a
          long term Spousal VISA. I am looking forward to
          meeting you and cannot wait to get started creating
          wonderful content and cantinuing my professional
          growth.
        </blockquote>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Splash from '../components/About/Splash.vue';
import Logo from '../components/About/Logo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Logo,
    Splash,
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
.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0 40px 0;
  .header {
    color: $secondary;
  }
  .icon-container {
    display: grid;
    grid-template-columns: repeat(6, 100px);
    grid-auto-rows: 100px;
    padding: 20px;
    width: 100%;
    overflow: scroll;
    gap: 5px;
    .icons {
      opacity: 1;
      width: 100%;
      height: 100%;
      border: none;
      box-shadow: none;
    }
    .js {
      background-color: rgb(255, 246, 166);
    }
    .ts {
      background-color: rgb(144, 170, 255);
    }
    .vue {
      background-color: rgb(157, 255, 161);
    }
    .react {
      background-color: rgb(146, 246, 255);
    }
    .node {
      background-color: rgb(155, 255, 172);
    }
    .gql {
      background-color: rgb(255, 183, 239);
    }
}
}
.content-container {
  display: flex;
  padding: 0 20px 20px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
}
.top {
  background-image: url(../assets/diagonal.svg);
}
.bottom {
  background-image: url(../assets/diagonal-right-btm.svg);
}
.content {
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
#triggerBox1 {
  position: relative;
  height: 5vh;
  margin: -1px 0 -1px 0;
  background-color: $primary;
}
#triggerBox2 {
  position: relative;
  height: 5vh;
  width: 100%;
  margin: -1px 0 -1px 0;
}
blockquote {
  width: 35%;
  opacity: 0;
  transition: transform 2s ease, opacity 3s ease;
  font-size: min(max(20px, 2.5vw), 30px);
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
  color: $secondary;
}
img {
  // mask-size: 100% 100%;
  opacity: 0;
  transition: transform 2s ease, opacity 3s ease;
  will-change: transform, opacity;
  background-color: $secondary;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.img1 {
  // mask-image: url(../assets/white-overlay-stagger.svg);
  width: 40%;
  height: auto;
  transform: translateX(-50%);
}
.img3 {
  // mask-image: url(../assets/white-overlay-stagger.svg);
  width: 40%;
  transform: translateX(-50%);
}
.visible {
  opacity: 1;
  transform: none;
}
@media screen and (max-width: 520px) {
  .content {
    flex-direction: column;
  }
  blockquote {
    width: 80%;
  }
  .top-quote {
    align-self: flex-start;
    padding: 0 0 20px 20px;
    text-align: left;
  }
  .bottom-quote {
    align-self: flex-end;
    padding: 20px 20px 0 0;
    text-align: right;
  }
  .img1, .img3 {
    width: 100%;
  }
}
</style>

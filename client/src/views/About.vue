<template>
  <div class="flex-page-wrapper">
    <Space/>
    <main>
      <article>
        <p id="tagline">Chess, Sports & Computers</p>
        </article>
        <div class="flex-content-wrapper">
          <article class="content life" >
            <h1>Life</h1>
            <p>Growing up in the UK I was obsessed with Martial Arts. I competed
              at a National and European level in 'freestyle' Karate. I was
              also fascinated with building computers from
              spare parts I was given. And, oh, I had 11 cats..</p>
            <img src="../assets/Kitten-Playing-With-Butterflies-Icon.svg" alt="">
          </article>
          <div id="separator"></div>
          <article class="content future">
            <h1 id="goals">Goals</h1>
            <p>Growing up in the UK I obsessed with Martial Arts. I completed
              at a National and European level in 'freestyle' Karate. I was
              also fascinated with building computers from spare parts I was
              given from the age of 10</p>
          </article>
        </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Space from '../components/About/Space.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Space,
  },
  setup() {
    window.scrollTo(0, 0);
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

// PAGE WRAPPER

.flex-page-wrapper {
  display: flex;
  flex-direction: column;
}
#tagline {
  font-size: 4rem;
  }
article {
  background-color: $primary;
  color: $secondary;
  padding: 50px;
}
.flex-content-wrapper {
  display: flex;
  position: relative;
  overflow: hidden;
  max-height: fit-content;
}
img {
  width: 100px;
  align-self: flex-end;
}
.about_content {
  width: 200px;
}
.life {
  background-color: $primary;
  color: $secondary;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: justify;
}
.future {
  background-color: $secondary;
  color: $primary;
}
#separator {
  width: 100px;
  border-left: 10vw solid transparent;
  border-top: 80vh solid $secondary;
  overflow: hidden;
}
h1 {
  border-top: 8px solid $secondary;
  border-bottom: 8px solid $secondary;
  width: fit-content;
  font-size: 4rem;
  padding-top: 5px;
}
#goals {
  border-top: 8px solid $primary;
  border-bottom: 8px solid $primary;
}
// CSS GRID THREE COLUMN WRAPPER
</style>

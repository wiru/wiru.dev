<template :key="store.state.articleLimit">
  <div class="root">
    <div class="introText">
    A simple newsfeed from space.com to demonstrate a reactive CSS Grid layout
  </div>
  <Suspense>
    <template #default>
      <section>
        <article v-for="index in store.state.articleLimit || []" :key="index">
          <a :href="store.state.response[index-1].guid">
            <img :src=store.state.response[index-1].enclosure.url alt="">
            <h1>{{ store.state.response[index-1].title }}</h1>
            <p>{{ store.state.response[index-1].content }}</p>
          </a>
        </article>
      </section>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, inject, onUnmounted,
} from 'vue';

interface State {
    response: string,
    articleLimit: number,
}
interface Methods {
    toggleSidebar: any,
}
interface Store {
    methods: Methods,
    state: State,
}

export default defineComponent({
  name: 'Feed',
  setup() {
    window.scrollTo(0, 0);
    const store: Store | undefined = inject('store');
    console.log(store);
    const articleLimitResize = () => {
      if (store) {
        if (window.innerWidth < 650) {
          store.state.articleLimit = 6;
        } else if (window.innerWidth < 900) {
          store.state.articleLimit = 8;
        } else if (window.innerWidth < 1050) {
          store.state.articleLimit = 11;
        } else if (window.innerWidth < 1300) {
          store.state.articleLimit = 11;
        } else store.state.articleLimit = 12;
      }
    };
    articleLimitResize();
    window.addEventListener('resize', articleLimitResize);
    onUnmounted(() => {
      window.removeEventListener('resize', articleLimitResize);
    });
    return { store };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.introText {
  width: 100%;
  background-color: $secondary;
  color: $primary;
  text-align: center;
  font-size: $p-font-size;
  padding: 1vw;
}
section {
  display: grid;
  align-self: center;
  height: minmax(100vh, 100vh);
  margin: 20px;
  grid-template-columns: repeat(5, 250px);
  grid-auto-rows: 150px;
  grid-template-areas:
  "a a a g h"
  "a a a i f"
  "a a a e f"
  "b c d e j"
  "b c d k l";
  grid-gap: 10px;
  :nth-child(1) { grid-area: a; @include big-tile }
  :nth-child(2) { grid-area: b; @include medium-tile }
  :nth-child(3) { grid-area: c; @include medium-tile }
  :nth-child(4) { grid-area: d; @include medium-tile }
  :nth-child(5) { grid-area: e; @include medium-tile }
  :nth-child(6) { grid-area: f; @include medium-tile }
  :nth-child(7) { grid-area: g; @include small-tile }
  :nth-child(8) { grid-area: h; @include small-tile }
  :nth-child(9) { grid-area: i; @include small-tile }
  :nth-child(10) { grid-area: j; @include small-tile }
  :nth-child(11) { grid-area: k; @include small-tile }
  :nth-child(12) { grid-area: l; @include small-tile }
}
@media screen and (max-width: 1300px) {
  section {
    grid-template-columns: repeat(4, 250px);
    grid-template-areas:
    "a a a f"
    "a a a f"
    "a a a e"
    "b c d e"
    "b c d k"
    "g h i j";
    :nth-child(1) { grid-area: a; @include big-tile }
    :nth-child(2) { grid-area: b; @include medium-tile }
    :nth-child(3) { grid-area: c; @include medium-tile }
    :nth-child(4) { grid-area: d; @include medium-tile }
    :nth-child(5) { grid-area: e; @include medium-tile }
    :nth-child(6) { grid-area: f; @include medium-tile }
    :nth-child(7) { grid-area: g; @include small-tile }
    :nth-child(8) { grid-area: h; @include small-tile }
    :nth-child(9) { grid-area: i; @include small-tile }
    :nth-child(10) { grid-area: j; @include small-tile }
    :nth-child(11) { grid-area: k; @include small-tile }
  }
}
@media screen and (max-width: 1050px) {
  section {
    grid-template-columns: repeat(3, 250px);
    grid-template-areas:
    "a a f"
    "a a d"
    "b g d"
    "b c k"
    "h c e"
    "i j e";
    :nth-child(1) { grid-area: a; @include big-tile }
    :nth-child(2) { grid-area: b; @include medium-tile }
    :nth-child(3) { grid-area: c; @include medium-tile }
    :nth-child(4) { grid-area: d; @include medium-tile }
    :nth-child(5) { grid-area: e; @include medium-tile }
    :nth-child(6) { grid-area: f; @include small-tile }
    :nth-child(7) { grid-area: g; @include small-tile }
    :nth-child(8) { grid-area: h; @include small-tile }
    :nth-child(9) { grid-area: i; @include small-tile }
    :nth-child(10) { grid-area: j; @include small-tile }
    :nth-child(11) { grid-area: k; @include small-tile }
  }
}
@media screen and (max-width: 900px) {
  section {
    grid-template-columns: repeat(2, 250px);
    grid-template-areas:
    "a e"
    "a c"
    "b c"
    "b d"
    "f d"
    "g h";
    :nth-child(1) { grid-area: a; @include medium-tile }
    :nth-child(2) { grid-area: b; @include medium-tile }
    :nth-child(3) { grid-area: c; @include medium-tile }
    :nth-child(4) { grid-area: d; @include medium-tile }
    :nth-child(5) { grid-area: e; @include small-tile }
    :nth-child(6) { grid-area: f; @include small-tile }
    :nth-child(7) { grid-area: g; @include small-tile }
    :nth-child(8) { grid-area: h; @include small-tile }
  }
}
@media screen and (max-width: 650px) {
  section {
    grid-template-columns: repeat(1, 250px);
    grid-template-areas:
    "a"
    "a"
    "b"
    "b"
    "d"
    "c"
    "c"
    "e"
    "f";
    :nth-child(1) { grid-area: a; @include medium-tile }
    :nth-child(2) { grid-area: b; @include medium-tile }
    :nth-child(3) { grid-area: c; @include medium-tile }
    :nth-child(4) { grid-area: d; @include small-tile }
    :nth-child(5) { grid-area: e; @include small-tile }
    :nth-child(6) { grid-area: f; @include small-tile }
  }
}
article {
  background-color: $secondary;
  height: 100%;
  color: $primary;
  position: relative;
  border-radius: 2px;
  filter: drop-shadow(1px 1px 1px black);
}
a > * {
    padding: 10px;
  }
p {
  font-size: 10px;
  color: black;
  text-align: left;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

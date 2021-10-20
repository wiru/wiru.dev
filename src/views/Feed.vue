<template :key="articleLimit">
  <div class="root">
    <div class="introText">
      <span id="header">An rss newsfeed from space.com.
        Demonstrating a responsive CSS Grid layout.</span>
    </div>
    <section>
      <article v-for="index in articleLimit" :key="index">
        <a :href="feedData[index-1].link">
          <img :src=feedData[index-1].img alt="">
          <h1>{{ feedData[index-1].title }}</h1>
          <p>{{ feedData[index-1].content }}</p>
        </a>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onUnmounted, reactive, ref,
} from 'vue';
import Parser from 'rss-parser';

type Article = {
  title: string,
  content: string,
  link: string,
  img: string,
};
const maxTitleLength = 50;
const maxContentLength = 80;
const parser = new Parser();

export default defineComponent({
  name: 'Feed',
  setup() {
    window.scrollTo(0, 0);

    const articleLimit = ref(12);
    const feedData = reactive<Article[]>([{
      title: '',
      content: '',
      img: '',
      link: '',
    }]);
    async function fetch() {
      const feed = await parser.parseURL('https://thingproxy.freeboard.io/fetch/https://space.com/feeds/all/');
      feed.items.slice(0, 12).forEach((item, index) => {
        if (item.guid && item.title && item.content && item.enclosure && item.isoDate) {
          feedData[index] = {
            title: '',
            content: '',
            img: '',
            link: '',
          };
          if (item.title.length > maxTitleLength) {
            feedData[index].title = `${item.title.substring(0, 45)}..`;
          } else {
            feedData[index].title = item.title;
          }
          if (item.content.length > maxContentLength) {
            feedData[index].content = `${item.content.substring(0, 70)}..`;
          } else {
            feedData[index].content = item.content;
          }
          feedData[index].link = item.guid;
          feedData[index].img = item.enclosure.url;
        }
      });
    }
    fetch();

    const articleLimitResize = () => {
      if (articleLimit.value) {
        if (window.innerWidth < 650) {
          articleLimit.value = 6;
        } else if (window.innerWidth < 900) {
          articleLimit.value = 8;
        } else if (window.innerWidth < 1050) {
          articleLimit.value = 11;
        } else if (window.innerWidth < 1300) {
          articleLimit.value = 11;
        } else articleLimit.value = 12;
      }
    };
    articleLimitResize();
    window.addEventListener('resize', articleLimitResize);
    onUnmounted(() => {
      window.removeEventListener('resize', articleLimitResize);
    });
    return { articleLimit, feedData };
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
  width: 100vw;
  background-color: $secondary;
  padding: 20px 100px 20px 20px;
  font-size: $p-font-size;
}
p {
  color: $primary;
  text-align: left;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow: ellipsis;
}
h1 {
  color: $primary;
  text-align: left;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  overflow: hidden
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
#header {
  width: 60vw;
  color: $primary;
  text-align: left;
  font-size: 1em;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

<template>
  <nav id="side-menu">
    <div>
      <button class="exit-btn" @click="store.methods.toggleSidebar"></button>
    </div>
    <div><router-link @click="store.methods.toggleSidebar" to="/">Home</router-link></div>
    <div><router-link @click="store.methods.toggleSidebar" to="/about">About</router-link></div>
    <div>Contact</div>
    <div><router-link @click="store.methods.toggleSidebar" to="/hire-me">Hire me</router-link></div>
    <div><router-link @click="store.methods.toggleSidebar" to="/feed">Newsfeed</router-link></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </nav>
  <div @click="store.methods.toggleSidebar" id="overlay"></div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'Navigation',
  setup: () => {
    const store = inject('store');
    return { store };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.open {
  transform: translateX(-250px);}
nav {
  display: grid;
  grid-row: repeat(12, 1fr);
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  line-height: 0;
  z-index: 102;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $tertiary;
    width: 100%;
    height: 100%;
    text-align: center;
    color: $off-white;
    font-size: 1.2rem;
    transform: translateX(0);
    transition: transform .5s ease-in-out;
    // filter: drop-shadow(4px 4px 10px rgba(0,0,0,.5));
  }
  @for $i from 1 through 12 {
    div:nth-child(#{$i}n) {
      transition-delay: #{$i * 0.05}s;
    }
  }
  .exit-btn {;
      background-color: $tertiary;
      height: 50px;
      width: 50px;
      position: absolute;
      top: 10px;
      left: 10px;
      border: none;
      cursor: pointer;
  }
  .exit-btn:after {
      content: '';
      bottom: 5px;
      height: 40px;
      border-left: 2px solid #fff;
      position: absolute;
      transform: rotate(45deg);
  }
  .exit-btn:before {
      content: '';
      bottom: 5px;
      height: 40px;
      border-left: 2px solid #fff;
      position: absolute;
      transform: rotate(-45deg);
  }
}
a {
  text-decoration: none;
  color: inherit;
}
#overlay {
  background-color: black;
  opacity: 0;
}
.fullscreen {
  position: fixed;
  height: 100%;
  width: 100%;
  opacity: 0.5 !important;
  z-index: 101;
  transition: 1s all;
}
</style>

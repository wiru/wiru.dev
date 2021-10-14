<template>
<div id="container">
  <span>Hi there! My name is</span>
  <span id="name">William Saville</span>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
#container {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: $tertiary-faded;
  padding: 1vw;
  z-index: 1;
  text-align: center;
  transform: translateX(-30vw);
  opacity: 0;
  animation: arrive 2s ease-in;
}
span {
  color: $secondary;
  font-size: min(max(20px, 3vw), 80px);;
}
#name {
  color: $primary;
}
</style>

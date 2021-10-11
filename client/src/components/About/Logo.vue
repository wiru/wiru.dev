<template>
<div id="me-polaroid">
  <img src="../../assets/will-cropped.jpg" alt="">
  <span>Will Saville</span>
</div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
#me-polaroid {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  background-color: $off-white;
  margin: 3vw;
  width: min(max(150px, 20vw), 300px);
  cursor: pointer;
  transform: rotate(5deg);
  filter: grayscale(100);
  z-index: 1;
  transition: .3s ease-in-out;
  box-shadow: .1rem .1rem 1rem .5rem rgba(0,0,0,0.2);
}
img {
  width: 100%;
  padding: .5vw;
}
#me-polaroid:hover {
  transform: rotate(0deg);
  filter: grayscale(0);
}
span {
  width: 100%;
  font-size: 2rem;
  padding: 1vw 0 1vw 0;
  color: $primary;
}
@media screen and (max-width: 520px) {
  #me-polaroid {
    filter: grayscale(0);
  }
}
</style>

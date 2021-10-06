<template>
  <section>
    <div class="splash">
      <div id="create">Create.</div>
      <div id="inspire">Inspire.</div>
    </div>
  </section>
  <div class="triangle"></div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
section {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10vh 0px 7vh 0px;
  overflow: hidden;
}

.triangle {
  content: '';
  width: 100%;
  height: 0;
  border-bottom: 10vw solid $secondary;
  border-left: 99vw solid transparent;
  z-index: 1;
  margin-bottom: -1px;
}

.splash {
  display: flex;
  border-right: 5px solid $off-white;
  align-self: center;
  color: $off-white;
  font-size: min(max(50px, 8vw), 300px);
  animation: cursor 1.2s infinite step-end;
  z-index: 2;
}

#create {
  animation: create 8s infinite steps(7);
  white-space: nowrap;
  overflow: hidden;
  font-family: consolas;
}

#inspire {
  animation: inspire 8s infinite steps(8);
  white-space: nowrap;
  overflow: hidden;
  font-family: consolas;
}

@keyframes cursor {
  0%{border-color: transparent;}
  50%{border-color: $off-white;}
  100%{border-color: transparent;}
}

@keyframes create {
  0% {width: 0ch;}
  20% {width: 7ch;}
  30% {width: 7ch;}
  40% {width: 0ch;}
  100% {width: 0ch;}
}

@keyframes inspire {
  0%{width: 0ch;}
  50% {width: 0ch;}
  70% {width: 8ch;}
  80% {width: 8ch;}
  90% {width: 0ch;}
  100% {width: 0ch;}
}

</style>

<template>
  <div class="triangle"></div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.triangle {
  content: '';
  width: 100%;
  height: 0;
  border-top: 10vw solid $secondary;
  border-left: 99vw solid transparent;
  z-index: 1;
  margin: -1px 0 -1px 0;
}
</style>

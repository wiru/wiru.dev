<template>
  <div class="triangle"></div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.triangle {
  width: 100%;
  border-bottom: 10vw solid $secondary;
  border-left: 99vw solid transparent;
  z-index: 1;
  margin: -1px 0 -1px 0;
}
</style>

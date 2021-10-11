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
  margin-bottom: -1px;
}
</style>

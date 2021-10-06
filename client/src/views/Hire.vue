<template>
  <section class="flex-container">
    <span>Hire me</span>
    <span>Interested in</span>
    <p>Front-End and Full-Stack positions</p>
    <span>My skills</span>
    <div id="skills">
      <img src="../assets/vue-logo.svg" alt="">
      <img src="../assets/react-logo.svg" alt="">
      <img class="shield" src="../assets/HTML5_logo.svg" alt="">
      <img class="shield" src="../assets/CSS3_logo.svg" alt="">
      <img class="shield" src="../assets/Javascript-logo.svg" alt="">
      <img class="wide" src="../assets/Node.js_logo.svg" alt="">
    </div>
    <span>Location</span>
    <p>Situated a short train ride from Shibuya</p>
    <div id="googleMaps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25938.704236047583!2d139.67869846836223!3d35.644042508503595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x6018f4ce8fc52bb7%3A0x2b30e214bb8d44f7!2sGakugei-daigaku%20Station%2C%203-ch%C5%8Dme-2%20Takaban%2C%20Meguro%20City%2C%20Tokyo%20152-0004%2C%20Japan!3m2!1d35.628862399999996!2d139.6853301!4m5!1s0x60188b563b00109f%3A0x337328def1e2ab26!2sShibuya%20Station%2C%202%20Chome-24%20Shibuya%2C%20Shibuya%20City%2C%20Tokyo%2C%20Japan!3m2!1d35.6580339!2d139.7016358!5e0!3m2!1sen!2sus!4v1633424956749!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hire',
  setup() {
    window.scrollTo(0, 0);
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.flex-container {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
span {
  color: $secondary;
  padding: 20px;
}
p {
  color: $off-white;
}
#googleMaps {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  overflow: hidden;
}
img {
  width: 100px;
}
.shield {
  width: 90px;
}
.wide {
  width: 120px;
}
</style>

<template>
  <header class="showcase">
    <div class="content">
      <div class="title" data-aos="fade-down" data-aos-duration="1000">Mobilenvi</div>
      <div class="text" data-aos="fade-up" data-aos-duration="1500">Raspberry Pi Weather Terminals</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Showcase'
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Archivo+Narrow|Gugi");

.showcase::after {
  content: "";
  height: 100vh;
  width: 100%;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  transition: all 1000ms;
}
.content {
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 30%;
  width: 555px;
  height: 350px;
  transition: all 1000ms;
}

.content .title {
  font-family: "Gugi", cursive;
  font-size: 120px;
  margin-top: 1rem;
  -webkit-text-stroke: #333 2px;
}

.content .text {
  font-family: "Archivo Narrow", sans-serif;
  font-size: 30px;
  text-align: center;
}
</style>

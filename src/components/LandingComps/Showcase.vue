<template>
  <header class="showcase bg-dark">
    <div class="content">
      <div class="title">Mobilenvi</div>
      <div class="text">Raspberry Pi Weather Terminals</div>
      <router-link to="/login"><button class="login-button">Login</button></router-link>
    </div>

  </header>
</template>

<script>

export default {
  name: 'Showcase',
  data () {
    return {
      credentials: {},
      valid: true,
      loading: false
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Archivo+Narrow|Gugi");

.showcase {
  content: "";
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // filter: blur(5px);
  // -webkit-filter: blur(5px);
  // transition: all 1000ms;
}
.content {
  // position: absolute;
  // z-index: 1;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  transition: all 1000ms;
}

.content .title {
  font-family: "Gugi", cursive;
  font-size: 120px;
  text-align: center;
  margin-top: 1rem;
  -webkit-text-stroke: #333 2px;
}

.content .text {
  font-family: "Archivo Narrow", sans-serif;
  font-size: 30px;
  text-align: center;
}

.content .login-button {
  margin-top: 50px;
  justify-self: center;
  border-radius: 2em;
  border: 1px solid black;
  padding: 20px 60px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 35px;
  color: black;
  background-color: rgba(115, 245, 115, 0.9);
  transition: all 0.2s;
}

.login-button button:hover {
  background-color: rgba(95, 255, 104, 0.7)
}

@media (max-width: 560px) {

  .showcase::after {
    height: 50vh;
  }
  .content {
    top: 15%;
    left: 15%;
    margin-top: 5px;
    width: 250px;
  }
  .content .title {
    font-size: 60px;
  }

  .content .text {
    margin-left: 10%;
    font-size: 15px;
  }
}
</style>

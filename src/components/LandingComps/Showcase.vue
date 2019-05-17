<template>
  <div>
    <header class="showcase">
      <div class="content">
        <div class="title" data-aos="fade-down" data-aos-duration="1000">Mobilenvi</div>
        <div class="text" data-aos="fade-up" data-aos-duration="1500">Raspberry Pi Weather Terminals</div>
      </div>

      <div class="login">
        <section class="login-button">
          <router-link to="/login"><button data-aos="zoom-in" data-aos-duration="2s">Login</button></router-link>
        </section>
      </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'

export default {
  name: 'Showcase',
  data () {
    return {
      credentials: {},
      valid: true,
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true
      axios.post('http://127.0.0.1:8000/api/token/', this.credentials).then(res => {
        console.log(res)
        console.log(res.data)
        console.log(res.data.details)
        this.$session.start()
        this.$session.set('token', res.data.access)
        router.push('/')
      }).catch(e => {
        this.loading = false
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Archivo+Narrow|Gugi");

.showcase::after {
  content: "";
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/background.jpg");
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

.login {
  min-height: 150px;
  position: absolute;
  z-index: 1;
  margin-top: 60vh;
  margin-left: 41vw;
}

.login-button button {
  border-radius: 2em;
  border: 1px solid black;
  padding: 20px 60px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 35px;
  color: black;
  background-color: rgba(115, 245, 115, 0.9);
  text-align: center;
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

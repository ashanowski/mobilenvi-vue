<template>
  <div class="login-page bg-dark">
    <section class="login-form">
      <form ref="form" @submit.prevent="login">

        <transition appear appear-active-class="animated fadeInRight">
          <div class="group">
            <input type="text"
                    placeholder="Username"
                    v-model="credentials.username"
                    name="username"
                    maxlength="70"
                    required>
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
        </transition>

        <transition appear appear-active-class="animated fadeInLeft">
          <div class="group">
            <input type="password"
                    placeholder="Password"
                    v-model="credentials.password"
                    name="password"
                    :counter="20"
                    maxlength="20"
                    required>
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
        </transition>

        <transition appear appear-active-class="animated fadeInDown">
          <button v-show="this.$session.get('token')" @click="login">Log In</button>
        </transition>

        <router-link to="/"><span class="back">Back</span></router-link>

      </form>
    </section>
  </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
  name: 'Login',
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

<style>

.login-form form {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.group {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  border: none;
  color: #fff;
  border-bottom: 1px solid #757575;
  background-color: #333;
  display: block;
  width: 300px;
}

input:focus { outline: none }

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
}

input:focus ~ label, input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #ffffff;
}

.bar:before, .bar:after {
  content:'';
  height:2px;
  width:0;
  bottom:1px;
  position:absolute;
  background:rgb(82, 174, 113);
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%;
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:80%;
  width:100px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from { background:#5264AE; } to { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter { from { background:#5264AE; }to { width:0; background:transparent; }
}
@keyframes inputHighlighter {
from { background:#5264AE; } to { width:0; background:transparent; }
}

.login-form button {
  align-self: center;
  padding: 20px 60px;
  border: 0.16em solid rgba(0, 0, 0, 0.9);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 22px;
  color: black;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}

.login-form button:disabled {
  color: rgba(rgb(187, 2, 2));
  font-size: 200px;
}

.login-form .back {
  padding: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  margin-top: 20px;
  display: flex;
}

.login-form .back:hover {
  color: #aaa;
}

</style>

<template>
  <div>
    <section v-show="!showForm" class="login-button bg-dark center">
      <transition leave-active-class="animated bounceOutLeft">
        <button @click="showForm = !showForm" data-aos="zoom-in">Login</button>
      </transition>
    </section>

    <transition enter-active-class="animated bounceInRight">
      <section v-show="showForm" class="login-form bg-dark center">
        <form @submit.prevent="logIn">
          <input type="text" placeholder="Username" v-model="username" name="username" v-validate="`required`">
          <span class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }} </span>
          <input type="password" placeholder="Password" v-model="password" name="password" v-validate="`required`">
          <button>Log In</button>
        </form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showForm: false

    }
  }
}
</script>

<style>
.login-button {
  min-height: 150px;
}

.login-button button {
  display: inline-block;
  padding: 20px 60px;
  position: absolute;
  right: 43%;
  margin-top: 25px;
  border: 0.16em solid rgba(0, 0, 0, 0.9);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 35px;
  color: black;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}

.login-form form {
  width: 50%;
  margin-left: 560px;
}

.login-form input, .login-form button {
  display: block;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 10px;
}
</style>

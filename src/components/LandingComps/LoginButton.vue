<template>
  <div class="login bg-dark">
      <section class="login-button center">
        <router-link to="/login"><button data-aos="zoom-in">Login</button></router-link>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      console.log(this.username)
      console.log(this.password)
    }
  }
}
</script>

<style>
.login {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button button {
  align-self: center;

  padding: 20px 60px;
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

</style>

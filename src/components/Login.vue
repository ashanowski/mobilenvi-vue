<template>
  <section class="login bg-dark">
    <button data-aos="zoom-in">Login</button>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<style>
.login {
  min-height: 150px;
}

.login button {
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
</style>

<template>
  <header>
    <nav>
      <ul>
        <router-link to="/account"><li>Home</li></router-link>
        <li>Data</li>
        <li>Terminals</li>
        <li>Contact</li>
        <li @click="logOut"><a>Log out</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import router from '@/router'

export default {
  name: 'Navbar',
  methods: {
    logOut () {
      localStorage.removeItem('token')
      router.push('/')
    }
  }

}
</script>

<style>
header {
  width: 100vw;
  color: black;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-items: center;
  box-shadow: 0 0 25px green;
}

header * {
  display: inline;
}

header li {
  margin: 20px;
}

header a {
  text-decoration: none;
  cursor: pointer;
}

header a:hover {
  color: green;
}

</style>

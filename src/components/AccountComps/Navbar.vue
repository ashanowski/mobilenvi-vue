<template>
  <header>
    <nav>
      <ul>
        <router-link to="/account"><li>Home</li></router-link>
        <router-link to="/account/data"><li>Weather</li></router-link>
        <router-link to="/account/terminals"><li>Terminals</li></router-link>
        <!-- <router-link to="/account/contact"><li>Contact</li></router-link> -->
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
      localStorage.removeItem('tokenRefresh')
      router.push('/')
    }
  }

}
</script>

<style>
header {
  color: black;
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px green;
}

header * {
  display: flex;
}

header li {
  margin: 20px;
}

header a {
  text-decoration: none;
  cursor: pointer;
  color: black;
}

header a:visited {
  text-decoration: none;
}

header a:hover {
  color: green;
}

header a:active {
  color: green;
}

</style>

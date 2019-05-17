<template>
  <div class="account">
    <Navbar/>
    <button @click="fetchData">Click me</button>
    <div class="data" v-bind:key="termData.id" v-for="termData in terminalData">
      <h3>Terminal: {{ termData.terminal.slice(-2, -1) }}</h3>
      <p>Temperature: {{ termData.temperature }}</p>
      <p>Pressure: {{ termData.pressure }}</p>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navbar from './AccountComps/Navbar'
import Footer from './AccountComps/Footer'
import router from '@/router/'
import axios from 'axios'

export default {
  name: 'Account',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      userAuth: 'Bearer '.concat(localStorage.token),
      refresh: {refresh: localStorage.tokenRefresh},
      terminalData: {}
    }
  },
  methods: {
    checkLoggedIn () {
      if (!localStorage.token) {
        router.push('/login')
      }
    },
    fetchData () {
      this.refreshToken()
      axios.get('http://127.0.0.1:8000/api/data/', {
        headers: {Authorization: this.userAuth}
      }).then(response => {
        console.log(response)
        this.terminalData = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    refreshToken () {
      axios.post('http://127.0.0.1:8000/api/token/refresh', this.refresh).then(response => {
        localStorage.token = response.access
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  beforeMount () {
    this.checkLoggedIn()
  }
}
</script>

<style>
.data {
  text-align: center;
}
</style>

<template>
  <div class="data">
    <div class="data" v-bind:key="termData.id" v-for="termData in terminalData">
      <transition appear appear-active-class="animated bounceInRight">
      <div class="dataBox">
        <h3>Terminal: {{ termData.terminal.slice(-2, -1) }}</h3>
        <p>Temperature: {{ termData.temperature }}</p>
        <p>Pressure: {{ termData.pressure }}</p>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>

import router from '@/router/'
import axios from 'axios'

export default {
  name: 'Data',
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
  mounted () {
    this.fetchData()
  }
}
</script>

<style>
.data {
  display: flex;
  flex-direction: column;
}

.dataBox {
  width: 500px;
  align-self: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 35px;
  border: 2px solid black;
  margin-top: 15px;
  margin-bottom: 0;
  background-color: aliceblue;
  color: black;
}

.dataBox:hover {
  background-color: rgba(161, 238, 137, 0.8);
  transition: 0.5s all;
}

.dataBox h3 {
  font-size: 150%;
}
</style>

<template>
  <div class="data">
    <button @click="refreshData" class="refresh-button">Refresh data</button>
    <div class="data" v-bind:key="termData.id" v-for="termData in terminalData">
      <transition appear appear-active-class="animated bounceInRight">
      <div class="dataBox">
        <i class="temp">{{ termData.temperature }}°C</i>
        <div class="vl"></div>
        <div class="info">
          <h3>Terminal: {{ termData.terminal.slice(-2, -1) }}</h3>
          <p>Pressure: {{ termData.pressure }} hPa</p>
          <p>Humidity: {{ termData.humidity }}%</p>
          <p>Date: {{ termData.added_at.slice(0, 10) }} {{ termData.added_at.slice(11, 19) }}</p>
        </div>
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
      console.log('checkLoggedIn')
      if (!localStorage.token && !localStorage.tokenRefresh) {
        router.push('/login')
      }
    },
    fetchData () {
      console.log('fetchData')
      if (!localStorage.token && localStorage.tokenRefresh) this.refreshToken()
      axios.get('http://127.0.0.1:8000/api/data/', {
        headers: {Authorization: this.userAuth}
      }).then(response => {
        console.log('fetchData: Authorization response:', response)
        this.terminalData = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    refreshData () {
      console.log('refreshData')
      this.terminalData = {}
      this.fetchData()
    },
    refreshToken () {
      console.log('refreshToken')
      axios.post('http://127.0.0.1:8000/api/token/refresh', this.refresh).then(response => {
        localStorage.token = response.data.access
        console.log('Token refresh response:', response.data.access)
      }).catch((error) => {
        console.log('Error:', error)
      })
    }
  },
  mounted () {
    console.log('mounted')
    this.fetchData()
  }
}
</script>

<style>
.data {
  display: flex;
  flex-direction: column;
}

.refresh-button {
  margin-top: 20px;
  align-self: center;
  justify-self: center;
  border-radius: 2em;
  border: 3px solid black;
  padding: 20px 60px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 25px;
  background-color: #eee;
  color: black;
  transition: all 0.2s;
}

.refresh-button:hover {
  background-color: rgba(115, 245, 115, 0.9);
}

.dataBox {
  display: flex;
  width: 500px;
  align-self: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 35px;
  border: 2px solid black;
  margin-top: 10px;
  margin-bottom: 15px;
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

.info {
  align-self: center;
  width: 250px;
  margin-left: -50px;
}
.temp {
  align-self: center;
  font-size: 60px;
  margin-left: 10px;
}

.blue {
  color: blue;
}

.orange {
  color: orange;
}

.red {
  color: red;
}
</style>

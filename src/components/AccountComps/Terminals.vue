<template>
  <div class="data">
    <button @click="refreshTerminals" class="refresh-button">Refresh data</button>
    <div class="data" v-bind:key="termInfo.id" v-for="termInfo in terminalInfo">
      <transition appear appear-active-class="animated bounceInRight">
      <div class="dataBox">
        <i class="icon fas fa-network-wired"></i>
        <div class="vl"></div>
        <div class="info">
          <h3>{{ termInfo.name }}</h3>
          <p>Latitude: {{ termInfo.latitude }}</p>
          <p>Longitude: {{ termInfo.longitude }}</p>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Terminals',
  data () {
    return {
      userAuth: 'Bearer '.concat(localStorage.token),
      refresh: {refresh: localStorage.tokenRefresh},
      terminalInfo: {}
    }
  },
  methods: {
    fetchTerminals () {
      console.log('fetchTerminals')
      if (!localStorage.token && localStorage.tokenRefresh) this.refreshToken()
      axios.get('http://127.0.0.1:8000/api/terminals/', {
        headers: {Authorization: this.userAuth}
      }).then(response => {
        console.log('fetchTerminals: Authorization response:', response.data)
        this.terminalInfo = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    refreshTerminals () {
      console.log('refreshTerminals')
      this.terminalInfo = {}
      console.log(this.terminalInfo)
      this.fetchTerminals()
    },
    refreshToken () {
      console.log('refreshToken')
      axios.post('http://127.0.0.1:8000/api/token/refresh', this.refresh).then(response => {
        localStorage.token = response.data.access
        console.log(response.data.access)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    console.log('mounted')
    this.fetchTerminals()
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
.icon {
  align-self: center;
  font-size: 100px;
}

.vl {
  border-left: thin dotted green;
  height: 100%;
  margin-right: 10px;
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

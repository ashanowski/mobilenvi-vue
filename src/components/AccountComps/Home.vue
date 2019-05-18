<template>
  <div class="home">

    <transition appear appear-active-class="animated fadeIn">
      <div class="top">
        <h1 class="text">Choose your data</h1>
      </div>
    </transition>

    <div class="boxes">
    <transition appear appear-active-class="animated bounceInLeft">
      <router-link to="account/data">
        <div class="choice-box">
          <i class="icon fas fa-network-wired"></i>
          <p class="desc">Weather data</p>
        </div>
      </router-link>
    </transition>

    <transition appear appear-active-class="animated bounceInRight">
      <router-link to="account/terminals">
        <div class="choice-box">
          <i class="icon fas fa-database"></i>
          <p class="desc">Terminal data</p>
        </div>
      </router-link>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'

}
</script>

<style>

.top {

}

.top .title {
  font-family: "Gugi", cursive;
  font-size: 120px;
  text-align: center;
  letter-spacing: 10px;
  margin-top: 1rem;
  -webkit-text-stroke: #333 2px;
}

.top .text {
  font-family: "Archivo Narrow", sans-serif;
  font-size: 65px;
  text-align: center;
}

.home {
  display: flex;
  flex-direction: column;
}

.boxes {
  display: flex;
  justify-content: space-around;
  justify-self: center;
  align-self: center;
  width: 70%;
}

.boxes a {
  text-decoration: none;
}

.choice-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  max-width: 400px;
  padding: 100px;
  color: #333;
  border: 5px solid black;
  background-color: #eee;
  margin-bottom: 20px;
}

.choice-box:hover {
  background-color: lightgreen;
  transition: all 0.5s;
}

.choice-box .icon {
  font-size: 150px;
}

.choice-box .desc {
  text-align: center;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
}

router-link {
  text-decoration: none;
}

</style>

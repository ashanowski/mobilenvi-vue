<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
body {
  background: rgba(0, 0, 0, 0.9);
  margin: 0;
  color: white;
  min-height: 100vh;
  /* display: flex; */
}

.container {
  max-width: 100vw;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
}

.grid-3 {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
}

.grid-2 {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
}

.center {
  text-align: center;
  margin: auto;
}

.bg-light {
  background: #f4f4f4;
  color: #333;
}

.bg-dark {
  background: #333;
  color: #f4f4f4;
}

@media (max-width: 560px) {

  .login button {
    left: 20%;
  }

  .grid-3,
  .grid-2 {
    grid-template-columns: 1fr;
  }

  .services div {
    border-bottom: #333 dashed 1px;
    padding: 1.2rem 1rem;
  }
}

@media (max-height: 500px) {
  .content .text {
    font-size: 10px;
  }

  .content {
    top: 20%;
    left: 17%;
  }
}
</style>

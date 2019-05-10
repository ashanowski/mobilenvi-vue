<template>
  <div id="app">
    <h1>Mobilenvi</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  h1 {
    text-align: center;
    font-size: 72px;
    -webkit-text-stroke: 3px black;
    letter-spacing: 0;
    color: #edffec;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #48435c;
  }
</style>

<template>
  <div id="app">
    <Showcase/>
    <Services/>
    <Main/>
    <Login/>
    <About/>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
import Main from './components/Main'
import Services from './components/Services'
import Showcase from './components/Showcase'

export default {
  name: 'App',
  components: {
    About,
    Footer,
    Login,
    Main,
    Services,
    Showcase
  },
  data () {
    return {
      hidden: false,
      cls: {
        display: this.hidden ? 'none' : 'inline-block'
      }
    }
  },
  methods: {
    hide () {
      this.hidden = !this.hidden
      console.log(30)
    }
  }
}
</script>

<style>
</style>

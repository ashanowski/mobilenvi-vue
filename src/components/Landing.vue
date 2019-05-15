<template>
  <div>
    <Showcase/>
    <Services/>
    <Main/>
    <LoginButton/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import About from './LandingComps/About'
import Footer from './LandingComps/Footer'
import Services from './LandingComps/Services'
import Showcase from './LandingComps/Showcase'
import LoginButton from './LandingComps/LoginButton'

export default {
  name: 'Landing',
  components: {
    About,
    Footer,
    LoginButton,
    Services,
    Showcase
  },
  data () {
    return {
      showAbout: true,
      showFooter: true,
      showLogin: true,
      showMain: true,
      showServices: true,
      showShowcase: true
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

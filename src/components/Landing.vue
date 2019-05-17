<template>
  <div>
    <Showcase/>
    <Services/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import About from './LandingComps/About'
import Footer from './LandingComps/Footer'
import Services from './LandingComps/Services'
import Showcase from './LandingComps/Showcase'

export default {
  name: 'Landing',
  components: {
    About,
    Footer,
    Services,
    Showcase
  },
  data () {
    return {
      showAbout: true,
      showFooter: true,
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

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
  }
}
</script>

<style>

</style>

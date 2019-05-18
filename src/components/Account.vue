<template>
  <div>
    <Navbar/>
    <transition appear>
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>

import Navbar from './AccountComps/Navbar'
import Footer from './AccountComps/Footer'
import Data from './AccountComps/Data'
import router from '@/router/'

export default {
  name: 'Account',
  components: {
    Navbar,
    Footer,
    Data
  },
  methods: {
    checkLoggedIn () {
      if (!localStorage.token && !localStorage.tokenRefresh) {
        router.push('/login')
      }
    }
  },
  beforeMount () {
    this.checkLoggedIn()
  }
}
</script>

<style>
</style>

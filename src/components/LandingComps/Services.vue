<template>
  <section class="services">
    <div class="container grid-3 center">
      <transition>
        <div class="service" data-aos="fade-down" data-aos-duration="500">
          <i class="fab fa-raspberry-pi fa-4x"></i>
          <h3>Terminals</h3>
          <p>Our stations are made using Raspberry Pi, transfering weather data directly to you.</p>
        </div>
      </transition>
      <div class="service" data-aos="fade-down" data-aos-duration="750">
        <i class="fas fa-mobile-alt fa-4x"></i>
        <h3>Accessibility</h3>
        <p>Access your weather data from anywhere!</p>
      </div>
      <div class="service" data-aos="fade-down" data-aos-duration="1000">
        <i class="fas fa-mail-bulk fa-4x"></i>
        <h3>Contact us</h3>
        <p>We're at your disposal at any moment. Feel free to ask for help.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>

@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
.services {
  min-height: 345px;
}

.service:hover {
  font-size: 110%;
  transition: all 1000ms;
}

</style>

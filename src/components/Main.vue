<template>
    <div>
        <header class="showcase">
            <div class="content">
                <!-- <img src="../assets/logo.png" alt="background" class="logo"> -->
                <div class="title">
                    Mobilenvi
                </div>
                <div class="text">
                    Raspberry Pi Weather Terminals
                </div>
            </div>
        </header>

        <section class="services">
            <div class="container grid-3 center">
                <div>
                    <i class="fab fa-raspberry-pi fa-4x"></i>
                    <h3>Terminals</h3>
                    <p>Our stations are made using Raspberry Pi, transfering weather data directly to you.</p>
                </div>
                <div>
                    <i class="fas fa-mobile-alt fa-4x"></i>
                    <h3>Accessibility</h3>
                    <p>Access your weather data from anywhere!</p>
                </div>
                <div>
                    <i class="fas fa-mail-bulk fa-4x"></i>
                    <h3>Contact us</h3>
                    <p>We're at your disposal at any moment. Feel free to ask for help.</p>
                </div>
            </div>
        </section>

        <section class="about bg-light">
            <div class="container">
                <div class="grid-2">
                    <div class="center">
                        <i class="fas fa-laptop-code fa-10x"></i>
                    </div>

                    <div>
                        <h3>About us</h3>
                        <p>Mobilenvi is a startup running services that provide weather data from any location throughout the world using Raspberry Pi powered stations. Our ways of gathering data is blazing fast, efficient and precise.</p>
                    </div>
                </div>
            </div>
        </section>

        <footer class="center bg-dark">
            <p>Mobilenvi &copy; 2019</p>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Main'

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Archivo+Narrow|Gugi');
body {
    background: rgba(0, 0, 0, 0.9);
    margin: 0;
    color: white;
}

.showcase::after {
    content: '';
    height: 100vh;
    width: 100%;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    transition: all 1000ms;
}

.showcase:hover::after {
    filter: blur(0px);
    -webkit-filter: blur(0px);

}

.showcase:hover .content {
    filter: blur(2px);
    -webkit-filter: blur(2px);

}

.content {
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 30%;
    width: 555px;
    height: 350px;
    transition: all 1000ms;
}

.content .title {
    font-family: 'Gugi', cursive;
    font-size: 120px;
    margin-top: 1rem;
    -webkit-text-stroke: #333 2px;
}

.content .text {
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 30px;
    text-align: center;

}

.container {
    max-width: 960px;
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

footer {
    padding: 1rem;
}

footer p {
    margin: 0;
}

@media(max-width: 560px) {
    .showcase::after {
        height: 50vh;
    }
    .content {
        top: 15%;
        left: 15%;
        margin-top: 5px;
        width: 250px;
    }
    .content .title {
        font-size: 60px;
    }
    .content .logo {
        height: 140px;
        width: 140px;
    }
    .content .text {
        display: none;
    }

    .grid-3, .grid-2 {
        grid-template-columns: 1fr;
    }

    .services div {
        border-bottom: #333 dashed 1px;
        padding: 1.2rem 1rem;
    }
}

@media(max-height: 500px) {
    .content .text {
        display: none;
    }

    .content {
        top: 20%;
        left: 17%;
    }
}

</style>

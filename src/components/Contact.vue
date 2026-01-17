<template>
    <section :style="{ backgroundImage: `url('${theme}')`}">
        <p>Dennons vie à vos idées</p>
        <h1>Collaborez avec moi</h1>

        <div class="container">
            <div class="contact-container">
                <h1>Aarin Deb</h1>
                <h2>Développeur Full-Stack</h2>

                <div class="info">
                    <img src="..//assets/smartphone.png" 
                    alt="Smartphone Icon"
                    class="icon">
                    <p>07 67 25 14 98</p>
                </div>

                <div class="info">
                    <img src="..//assets/email.png" 
                    alt="Mail Icon"
                    class="icon">
                    <p>aarindeb2003@gmail.com</p>
                </div>

                <div class="info">
                    <img src="..//assets/map.png" 
                    alt="Location Icon"
                    class="icon">
                    <p>Paris, FRANCE</p>
                </div>
            </div>
            <div class="photo">
                <img src="..//assets/contact-pp.jpg" 
                alt="Photo Contact" 
                class="photoContact">
            </div>
        </div>
    </section>
</template>

<script setup>
    import theme from "..//assets/background.png"
</script>

<style scoped>
    section {        
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-position: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        color: #404e3b;
    }

    .photoContact {
        max-width: 100%;
        height: 400px;
        border: 0.05rem solid #e6e6e6;
        border-radius: 0.75rem;
        box-shadow: 10px 10px 20px #404e3b;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .icon {
        height: 40px;
        width: 40px;
    }
</style>
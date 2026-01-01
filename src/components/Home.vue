<template>
    <section class="home" :style="{ backgroundImage: `url('${theme}')` }">
        <img src="../assets/pp-home.jpg" alt="photo-profile" class="pp">
        <p>Salut! Je suis</p>
        <h1>Aarin Deb</h1>
        <h2>Développeur Front-End & Back-End</h2>
    </section>
</template>

<script setup>
    import theme from "../assets/background.png"
</script>

<style scoped>
    .home{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        text-align: center;
        height: 100%;      
    }

    .pp {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        margin: 25px 0 20px 0;
        box-shadow: 10px 10px 20px #6C8480;
    }

    p, h1, h2 {
        color: #404e3b;
        text-shadow: 10px 10px 20px #6C8480;
    }
</style>
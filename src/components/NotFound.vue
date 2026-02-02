<template>
    <section class="not-found-container">
        <img src="../assets/error.png" 
        alt="Error Icon"
        class="not-found-img">
        <p>Oups! La page que vous cherchez n'existe pas.</p>
        <router-link to="/" class="return-button">Retourner à l'Accueil</router-link>
    </section>
</template>

<script setup>
    console.log("404 component mounted")
</script>

<style scoped>
    .not-found-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        text-align: center;
        background-image: linear-gradient(#7f5af0, #16161a);
        padding: 2rem;
        width: 100%;
    }

    .not-found-img {
        max-width: 400px;
        width: 80%;
        margin-bottom: 2rem;
        filter: drop-shadow(10px 10px 20px #7f5af0);
    }

    h1 {
        font-size: 5rem;
        margin: 0.5rem 0;
    }

    p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: #fffffe;
    text-shadow: 10px 10px 20px #7f5af0;
    }

    .return-button {
        border-radius: 8px;
        padding: 0.6em 1.2em;
        margin-top: 0.9rem;
        text-align: center;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #16161a;
        color: #fffffe;
        box-shadow: 10px 10px 20px #7f5af0;
        cursor: pointer;
        transition: 0.3s ease;
        border: none;
    }
</style>
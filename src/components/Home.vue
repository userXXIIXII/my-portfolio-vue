<template>
    <section class="home-container">
        <div class="left">           
            <h2>Salut!👋 Je suis</h2>
            <h1>Aarin Deb</h1>
            <p>Je code, je crée et j’optimise le web. <br> 
                Ici, vous trouverez mes projets, <br> 
                mes compétences et un peu de mon univers numérique.
            </p>
            <router-link to="/about">
                <button class="button">C'est parti !</button>
            </router-link>
        </div>
        <div class="right">
            <img src="../assets/intropic.jpg" alt="photo-profile" class="pp">
        </div>
        
    </section>
</template>

<script setup>
</script>

<style scoped>
    .home-container{
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 1.5rem;
        background-color: #16161a;    
    }

    .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }

    .pp {
        width: 450px;
        height: 450px;
        border-radius: 50%;
        object-fit: cover;
        margin: 25px 0 20px 0;
        box-shadow: 10px 10px 20px black;
    }

    .button {
        background-color: #7f5af0;
        color: #fffffe;
        height: 75px;
        width: 200px;
        transition: 0.3s ease;
        box-shadow: 10px 10px 10px black;
    }

    .button:hover {
        transform: scale(1.10);
    }

    @media (max-width: 767px) {
        .home-container {
            display: flex;
            flex-direction: column-reverse;
            padding: 20px;
        }

        .pp {
            width: 250px;
            height: 250px;
            margin: 0px;
        }

        .button {
            height: 55px;
            width: 150px;
            font-size: 0.9rem;
        }

        .left {
            align-items: center;
        }

        h1 {
            font-size: 1.5rem;
        }

        h2 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1024px) {
        .home-container {
            flex-direction: column-reverse;
            padding-bottom: 20px;
        }
    }
</style>

<template>
    <section>
        <div class="left">
            <div class="projet-container">
                <img src="..//assets/cv.png" alt="Cv Icon" class="icon">
                <h3>Projet CV</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/CV-CEF"
                    target="_blank">
                        <button class="button">GitHub</button>
                    </a>
                    <a href="https://userxxiixii.github.io/CV-CEF/"
                    target="_blank">
                        <button class="button">Démo</button>
                    </a>
                </div>
            </div>
            <div class="projet-container">
                <img src="..//assets/portfolio.png" alt="Portfolio Icon" class="icon">
                <h3>Projet Portfolio</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/my-portfolio-vue"
                    target="_blank">
                        <button class="button">GitHub</button>
                    </a>
                    <a href="http://localhost:5175/"
                    target="_blank">
                        <button class="button">Démo</button>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="right">
            <p>Parcourez mes</p>
            <h1>Projets</h1>
            <p>
                Sur cette page, vous trouverez un aperçu détaillé de <br>
                mes réalisations en développement web, du front-end <br>
                au back-end. Chaque projet illustre non seulement ma <br>
                maîtrise des technologies modernes, mais aussi ma <br>
                capacité à concevoir des interfaces intuitives, à résoudre <br>
                des problèmes complexes et à créer des expériences <br>
                utilisateurs fluides et engageantes.
            </p>
            <router-link to="/contact">
                <button class="button2">Parlons de votre projet</button>
            </router-link>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    section {        
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background-color: #242629;
    }

    .left {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .projet-container {
        border-radius: 2%;
        box-shadow: 10px 10px 20px black;
        background-color: #16161a;

        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        width: 400px;
        padding: 1.5rem;
    }
    
    .icon {
        height: 150px;
    }

    .button-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .button {
        background-color: #7f5af0;
        color: #fffffe;
        height: 45px;
        width: 100px;
        transition: 0.3s ease;
        box-shadow: 10px 10px 10px black;
    }

    .button:hover {
        transform: scale(1.10);
    }

    .button2 {
        background-color: #7f5af0;
        color: #fffffe;
        height: 75px;
        width: 200px;
        transition: 0.3s ease;
        box-shadow: 10px 10px 10px black;
    }

    .button2:hover {
        transform: scale(1.10);
    }

    

</style>
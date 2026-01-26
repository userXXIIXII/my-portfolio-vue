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
                Sur cette page, vous trouverez un aperçu détaillé de 
                mes réalisations en développement web, du front-end 
                au back-end. Chaque projet illustre non seulement ma 
                maîtrise des technologies modernes, mais aussi ma 
                capacité à concevoir des interfaces intuitives, à résoudre 
                des problèmes complexes et à créer des expériences 
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

    .right {
        max-width: 700px;
        width: 100%;
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

    @media (max-width: 768px) {
        section {        
        flex-direction: column-reverse;
        padding: 1rem;
        gap: 20px;
    }

    .left {
        flex-direction: column;
    }

    .projet-container {
        width: 200px;
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

    .button {
        width: 100px;
        height: 40px;
        font-size: 0.9rem;
    }

    .button2 {
        width: 150px;
        height: 55px;
        font-size: 0.9rem;
    }

    }

    @media (max-width: 1024px) {
        section {
            flex-direction: column-reverse;
            padding: 20px;
            gap: 20px;
        }
    }
    

</style>
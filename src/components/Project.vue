<template>
    <section>
        <div class="left">
            <div class="projet-container">
                <img src="..//assets/cv.png" alt="Cv Icon" class="icon">
                <h3>Projet CV</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/CV-CEF"
                    target="_blank" class="buttonP">
                        GitHub
                    </a>
                    <a href="https://userxxiixii.github.io/CV-CEF/"
                    target="_blank" class="buttonP">
                        Démo
                    </a>
                </div>
            </div>
            <div class="projet-container">
                <img src="..//assets/portfolio.png" alt="Portfolio Icon" class="icon">
                <h3>Projet Portfolio</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/my-portfolio-vue"
                    target="_blank" class="buttonP">
                        GitHub
                    </a>
                    <a href="http://localhost:5175/"
                    target="_blank" class="buttonP">
                        Démo
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
            <router-link to="/contact" class="button">
                Parlons de votre projet
            </router-link>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
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

    .buttonP {
        border-radius: 8px;
        padding: 0.6em 1.2em;
        text-align: center;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #7f5af0;
        color: #fffffe;
        box-shadow: 10px 10px 10px black;
        cursor: pointer;
        transition: 0.3s ease;
    }

    .buttonP:hover {
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

    }

    @media (max-width: 1024px) {
        section {
            flex-direction: column-reverse;
            padding: 20px;
            gap: 20px;
        }
    }
    

</style>
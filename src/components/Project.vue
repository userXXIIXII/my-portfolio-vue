<template>
    <section :style="{backgroundImage: `url('${theme}')`}">

            <p>Parcourez mes</p>
            <h1>Projets</h1>
        

        <div class="projet">
            <div class="projet-container">
                <img src="..//assets/cv.png" alt="Cv Icon" class="icon">
                <h3>Projet CV</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/CV-CEF"
                    target="_blank">
                        <button>GitHub</button>
                    </a>
                    <a href="https://userxxiixii.github.io/CV-CEF/"
                    target="_blank">
                        <button>Démo</button>
                    </a>
                </div>
            </div>
            <div class="projet-container">
                <img src="..//assets/portfolio.png" alt="Portfolio Icon" class="icon">
                <h3>Projet Portfolio</h3>
                <div class="button-container">
                    <a href="https://github.com/userXXIIXII/my-portfolio-vue"
                    target="_blank">
                        <button>GitHub</button>
                    </a>
                    <a href="http://localhost:5175/"
                    target="_blank">
                        <button>Démo</button>
                    </a>
                </div>
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
    }

    .projet {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }

    .projet-container {
        border: 0.1rem solid #e6e6e6;
        border-radius: 2rem;
        box-shadow: 10px 10px 20px black;

        text-align: center;
        text-shadow: 10px 10px 20px black;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        width: 400px;
        padding: 1.5rem;

        background-color: #404e3b;
    }
    
    .icon {
        height: 150px;
    }

    .button-container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    button {
        border: 0.01rem solid #e6e6e6;
        border-radius: 1rem;
        transition: 0.3s ease;
        box-shadow: 7px 7px 15px black;
        background-color: #bac8b1;
        color: #404e3b;
        font-weight: bolder;
    }

    button:hover {
        transform: scale(1.10);
    }

    p, h1 {
        color: #404e3b;
        text-shadow: 10px 10px 20px #6C8480;
    }
    

</style>
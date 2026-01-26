<template>
    <section>

        <div class="left">
            <div class="details-container">
                <div class="head">
                    <img src="../assets/experience.png" alt="experience icon" class="icon">
                    <h2>Expériences</h2>
                </div>
                <p>3+ années <br>Full-Stack Développeur </br></p>
            </div>
            <div class="details-container">
                <div class="head">
                    <img src="../assets/education.png" alt="educatio icon" class="icon">
                    <h2>Education</h2>
                </div>
                <p>Titre Professionnel Développeur Web et Web Mobile</p>
            </div>
        </div>

        <div class="right">
            <div>
                <p>Découvrez-en plus</p>
                <h1>Qui suis-je?</h1> 
            </div>
        
            <p class="bio">
                Ayant suivi une formation intensive en développement web et web mobile, 
                j'ai acquis une solide base de compétences couvrant les principaux
                langages de programmation, frameworks et technologies nécessaires
                pour concevoir, développer et déployer des applications web complètes.
                Cette formation m'a permis de maîtriser les concepts fondamentaux
                du développement web, notamment HTML, CSS, JavaScript,
                ainsi que l'utilisation de frameworks tels que React, Angular 
                et Node.js. J'ai également acquis une expérience pratique en 
                travaillant sur des projets réels, ce qui m'a permis d'affiner
                mes compétences techniques et de développer ma capacité à 
                résoudre efficacement les problèmes rencontrés lors du 
                développement d'applications web.
            </p>
        </div>

        <router-link to="/skill">
                <button class="button">Mes outils et langages</button>
        </router-link>
    </section>
</template>


<script setup>
</script>

<style scoped>
    section{
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 1.5rem;
        background-color: #242629;
        position: relative;
    }

    .details-container{
        border-radius: 2%;
        box-shadow: 10px 10px 20px black;
        padding: 1.5rem;
        width: 100%;
        max-width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        background-color: #16161a;
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 60vh;
    }

    .icon{
        height: 70px;
    }

    .bio{
        margin: 0 auto;
        max-width: 750px;
    }

    .head {
        display: flex;
    }

    .head > h2 {
        padding-left: 20px;
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

    @media (max-width: 768px) {
        section {
            flex-direction: column;
            padding: 20px;
            gap: 40px;
        }

        .button {
            height: 55px;
            width: 150px;
            font-size: 0.9rem;
            right: 150px;
            bottom: 20px;
        }

        .icon{
            height: 50px;
        }

        .details-container {
            max-width: 250px;
            width: 100%;
        }

        .left {
            gap: 15px;
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
            flex-direction: column;
            padding-bottom: 20px;
        }
     }

</style>
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
                Ayant suivi une formation intensive en développement web et web mobile,<br> 
                j'ai acquis une solide base de compétences couvrant les principaux<br>
                langages de programmation, frameworks et technologies nécessaires<br> 
                pour concevoir, développer et déployer des applications web complètes.<br>
                Cette formation m'a permis de maîtriser les concepts fondamentaux<br>
                du développement web, notamment HTML, CSS, JavaScript,<br>
                ainsi que l'utilisation de frameworks tels que React, Angular <br>
                et Node.js. J'ai également acquis une expérience pratique en <br>
                travaillant sur des projets réels, ce qui m'a permis d'affiner<br>
                mes compétences techniques et de développer ma capacité à <br>
                résoudre efficacement les problèmes rencontrés lors du <br>
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
        width: 400px;
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
    }

    .head {
        display: flex;
    }

    .head > h2 {
        padding-left: 20px;
    }

    .button {
        position: absolute; 
        bottom: 50px;       
        right: 50px; 
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

</style>
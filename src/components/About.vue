<template>
    <section class="about" :style="{ backgroundImage: `url('${theme}')` }">

        <div class="top">
           <p>Découvrez-en plus</p>
            <h1>Qui suis-je?</h1> 
        </div>
        

        <div class="section-details">
            <div class="details-container">
                <img src="../assets/experience_icon.png" alt="experience icon" class="icon">
                <h2>Expériences</h2>
                <p>3+ années <br>Full-Stack Développeur </br></p>
            </div>
            <div class="details-container">
                <img src="../assets/education_icon.png" alt="educatio icon" class="icon">
                <h2>Education</h2>
                <p>Titre Professionnel Développeur Web et Web Mobile</p>
            </div>
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
    </section>
</template>


<script setup>
    import theme from "../assets/background.png"
</script>

<style scoped>
    section{
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

    .details-container{
        padding: 1.5rem;
        width: 400px;
        height: 200px;
        border-radius: 2rem;
        border: 0.1rem solid #e6e6e6;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 10px 10px 20px #6C8480;
        background-color: #404e3b;
    }

    .section-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .icon{
        height: 60px;
    }

    .bio{
        color: #404e3b;
        width: 900px;
        margin: 0 auto;
        text-shadow: 10px 10px 10px #6C8480;
    }

    .top{
        color: #404e3b;
        text-shadow: 10px 10px 20px #6C8480;
    }
</style>
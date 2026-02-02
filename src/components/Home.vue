<template>
    <section class="home-container">
        <div class="left">           
            <p>Salut!👋 Je suis</p>
            <h1>Aarin Deb</h1>
            <p>Je code, je crée et j’optimise le web. <br> 
                Ici, vous trouverez mes projets, <br> 
                mes compétences et un peu de mon univers numérique.
            </p>
            <router-link to="/about" class="button">
                C'est parti !
            </router-link>
        </div>
        <div class="right">
            <img src="../assets/intropic.jpg" alt="photo-profile" class="pp">
        </div>
        <div class="project">
            <img src="../assets/cv.png" alt="CV Logo" class="logo">
            <h2>Ma dernière création</h2>
            
            <div class="project-container">
            <button @click="openModal" class="button">Ouvrir</button>

                <div class="modal-container" :class="{ show: isModalOpen }" 
                @click.self="closeModal">
                    <div class="modal">
                        <h3>CV - HTML/CSS</h3>
                        <h4>31/01/2024</h4>
                        <img src="../assets/CV-html.png" 
                        alt="Projet IMG" class="project-img">
                        <p>
                            Ce projet est un CV réalisé uniquement avec 
                            <strong>HTML</strong> et <strong>CSS</strong>. 
                            Il présente mes informations personnelles, ma 
                            formation, mes expériences et mes compétences.
                            L’objectif était de pratiquer la structuration 
                            du HTML et le stylisme de base avec CSS.
                        </p>

                        <div class="modal-button-container">
                            <a href="https://userxxiixii.github.io/CV-CEF/" target="_blank" class="button">
                                Démo
                            </a>
                            <a href="https://github.com/userXXIIXII/CV-CEF" target="_blank" class="button">
                                GitHub
                            </a>   
                            <button @click="closeModal" class="button">
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { ref } from 'vue'

    const isModalOpen = ref(false)

    function openModal() {
    isModalOpen.value = true
    }

    function closeModal() {
    isModalOpen.value = false
    }
    
</script>

<style scoped>

    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-container > button {
        background-color: #7f5af0;
        color: #fffffe;
        height: 45px;
        width: 100px;
        transition: 0.3s ease;
        box-shadow: 10px 10px 10px black;
        cursor: pointer;
    }

    .logo {
        height: 150px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .modal-container {
       position: fixed;
       top: 0;
       left: 0;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       width: 100vw;
       background-color: rgb(0, 0, 0, 0.3);
       opacity: 0;
       pointer-events: none;
       z-index: 1000;
    }

    .modal-container.show {
        opacity: 1;
        pointer-events: auto;
    }

    .modal {
        background-color: #16161a;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 10px 10px 20px black;
        width: 600px;
        max-width: 100%;
        text-align: center;
    }

    .modal-button-container {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .project-img {
        height: 350px;
        border-radius: 10px;
        box-shadow: 10px 10px 20px black;
    }

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

  

    @media (max-width: 767px) {
        .home-container {
            display: flex;
            flex-direction: column;
            padding: 20px;
        }

        .pp {
            width: 250px;
            height: 250px;
            margin: 0px;
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
            flex-direction: column;
            padding-bottom: 20px;
        }
    }
</style>

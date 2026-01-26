<template>
    <section>
        <div class="left">
            <h2>Emplacement</h2>
            <p>40 Avenue de la Division Leclerc,<br> 94230 Cachan</p>
            
            <h2>Suivez moi</h2>  
            <div class="social">  
                <a href="https://github.com/userXXIIXII" target="_blank">
                    <img src="../assets/github.png" 
                    alt="github Icon"
                    class="icon">
                </a>

                <a href="https://www.instagram.com/arcadia.dev/" target="_blank">
                    <img src="../assets/insta.png" 
                    alt="github Icon"
                    class="icon">
                </a>

                <a href="https://www.linkedin.com/in/aarin-deb/" target="_blank">
                    <img src="../assets/linkedin.png" 
                    alt="github Icon"
                    class="icon">
                </a>
            </div>   
        </div>

        <div class="contact">
            <h1>Contact</h1>
            <p>Une question, un projet ou une collaboration ? 
                N'hésitez pas à me contacter.
            </p>

            <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
                <label>Nom</label>
                <input type="text" v-model="form.name" required />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="form.email" required />
            </div>

            <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" required></textarea>
            </div>

            <button class="button" type="submit">
                Envoyer le message
            </button>

            <p v-if="success" class="success">
                Message envoyé avec succès !
            </p>
            </form>
        </div>

    
</section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const success = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log(form) // pour test

  success.value = true

  // reset du formulaire
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>


<style scoped>

    section {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background-color: #16161a;
    }

    .social {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .icon {
        height: 60px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .contact {
    border-radius: 2%;
    box-shadow: 10px 10px 10px black;
    padding: 2rem;
    text-align: center;
    background-color: #242629;
    }

    .contact h1 {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    }

    .contact p {
    margin-bottom: 0.5rem;
    }

    .contact-form {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    }

    .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    }

    label {
    margin-bottom: 0.4rem;
    font-weight: 500;
    }

    input,
    textarea {
    padding: 0.7rem;
    border-radius: 2%;
    border: none;
    background-color: #16161a;
    color: #fffffe;
    font-size: 0.95rem;
    }

    textarea {
    resize: none;
    min-height: 120px;
    }

    .button {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    background-color: #7f5af0;
    color: #fffffe;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: 10px 10px 10px black;
    }

    .button:hover {
    transform: scale(1.05);
    }

    .success {
    margin-top: 1rem;
    color: #2cb67d;
    }

    @media (max-width: 768px) {
        section {
            flex-direction: column-reverse;
            padding: 1rem;
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
        }
    }

</style>
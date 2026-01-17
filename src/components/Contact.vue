<template>
<!--    <section>
        <p>Dennons vie à vos idées</p>
        <h1>Collaborez avec moi</h1>

        <div class="container">
            <div class="contact-container">
                <h1>Aarin Deb</h1>
                <h2>Développeur Full-Stack</h2>

                <div class="info">
                    <img src="..//assets/smartphone.png" 
                    alt="Smartphone Icon"
                    class="icon">
                    <p>06 50 24 13 97</p>
                </div>

                <div class="info">
                    <img src="..//assets/email.png" 
                    alt="Mail Icon"
                    class="icon">
                    <p>aarindeb2003@gmail.com</p>
                </div>

                <div class="info">
                    <img src="..//assets/map.png" 
                    alt="Location Icon"
                    class="icon">
                    <p>Paris, FRANCE</p>
                </div>
            </div>
            <div class="photo">
                <img src="..//assets/ppcontact.jpg" 
                alt="Photo Contact" 
                class="photoContact">
            </div>

        </section>

        </div>-->

  <section class="contact">
    <h1>Contact</h1>
    <p>Une question, un projet ou une collaboration ? N’hésitez pas à me contacter.</p>

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
/*    section {        
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-position: center;
        justify-content: center;
        background-color: #16161a;
    }

    .photoContact {
        max-width: 100%;
        height: 400px;
        border: 0.05rem solid #e6e6e6;
        border-radius: 0.75rem;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .contact-container {
        border-radius: 2%;
        background-color: #242629;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .icon {
        height: 40px;
        width: 40px;
    } */

     .contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.contact h1 {
  margin-bottom: 0.5rem;
}

.contact p {
  margin-bottom: 2rem;
  color: #94a1b2;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  background-color: #242629;
  color: #fffffe;
  font-size: 1rem;
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
}

.button:hover {
  transform: scale(1.05);
}

.success {
  margin-top: 1rem;
  color: #2cb67d;
}

</style>
<template>
    <section>
        <div class="left">
            <p>Découvrez mes</p>
            <h1>Compétences</h1>
            <p class="bio">Découvrez mes compétences en développement web et 
                mes outils favoris pour créer des applications modernes 
                et performantes. Du HTML et CSS aux frameworks 
                JavaScript comme Vue.js, je maîtrise les technologies 
                nécessaires pour concevoir des interfaces réactives, 
                optimiser l’expérience utilisateur et développer des 
                projets complets, du front-end au back-end. Parcourez 
                mes compétences pour voir comment je transforme des idées 
                en applications fonctionnelles et élégantes.
            </p>
            <router-link to="/project" class="button">
                Mes réalisations
            </router-link>
        </div>
        
        <div class="competences">
            <div class="comp-container">
                <h2>Développement <br>Front-End</h2>
                <div class="comp-details">
                    <SkillBar name="HTML" :level="100" :image="htmlIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="CSS" :level="100" :image="cssIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="JS" :level="80" :image="jsIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Vue.JS" :level="90" :image="vueIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Angular" :level="70" :image="angularIcon"/>
                </div>
            </div>
            <div class="comp-container">
                <h2>Développement <br>Back-End</h2>
                <div class="comp-details">
                    <SkillBar name="Node JS" :level="85" :image="nodeIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="PHP" :level="75" :image="phpIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Python" :level="70" :image="pythonIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Java" :level="100" :image="javaIcon"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Ruby" :level="75" :image="rubyIcon"/>
                </div>
            </div> 
        </div>
    </section>
</template>

<script setup>
    import SkillBar from "../components/Skillbar.vue"
    
    import htmlIcon from "../assets/html.png"
    import cssIcon from "../assets/css.png"
    import jsIcon from "../assets/js.png"
    import vueIcon from "../assets/vue.png"
    import angularIcon from "../assets/angular.png"
    import nodeIcon from "../assets/node.png"
    import phpIcon from "../assets/php.png"
    import pythonIcon from "../assets/python.png"
    import javaIcon from "../assets/java.png"
    import rubyIcon from "../assets/ruby.png"

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
        justify-content: space-around; 
        background-color: #16161a;    
        
    }

    .competences {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }

    .comp-container {
        border-radius: 2%;
        text-align: center;
        padding: 2rem;
        padding-top: 1.3rem;
        height: 600px;
        width: 100%;
        max-width: 400px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        box-shadow: 10px 10px 10px black;
        background-color: #242629;
    }

    .bio {
        width: 100%;
        max-width: 800px;
    }


@media (max-width: 768px) {
    section {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .left {
        max-width: 100%;
    }

    .competences {
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        padding: 0;
    }

    .comp-container {
        max-width: 100%;
        padding: 1.5rem;
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
            padding: 20px;
        }
}
</style>
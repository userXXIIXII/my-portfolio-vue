<template>
    <section>
        <div class="left">
            <p>Découvre mes</p>
            <h1>Compétences</h1>
            <p>Découvrez mes compétences en développement web et <br>
                mes outils favoris pour créer des applications modernes <br>
                et performantes. Du HTML et CSS aux frameworks <br>
                JavaScript comme Vue.js, je maîtrise les technologies <br>
                nécessaires pour concevoir des interfaces réactives, <br>
                optimiser l’expérience utilisateur et développer des <br>
                projets complets, du front-end au back-end. Parcourez <br>
                mes compétences pour voir comment je transforme des idées <br>
                en applications fonctionnelles et élégantes.
            </p>
            <router-link to="/project">
                <button class="button">Mes réalisations</button>
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
</script>



<style scoped>
    section {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around; 
        background-color: #16161a;    
        max-height: 737.6px; 
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
        width: 400px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        box-shadow: 10px 10px 10px black;
        background-color: #242629;
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
</style>
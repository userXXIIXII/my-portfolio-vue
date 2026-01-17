<template>
    <section :style="{backgroundImage: `url('${theme}')`}">
        <p>Découvre mes</p>
        <h1>Compétences</h1>
        <div class="competences">
            <div class="comp-container">
                <h2>Développement <br>Front-End</h2>
                <div class="comp-details">
                    <SkillBar name="HTML" :level="100"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="CSS" :level="100"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="JS" :level="80"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Vue.JS" :level="90"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="Angular" :level="70"/>
                </div>
            </div>
            <div class="comp-container">
                <h2>Développement <br>Back-End</h2>
                <div class="comp-details">
                    <SkillBar name="Node JS" :level="85"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="EX" :level="75"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="PHP" :level="70"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="gitHub" :level="100"/>
                </div>
                <div class="comp-details">
                    <SkillBar name="C#" :level="75"/>
                </div>
            </div> 
        </div>
    </section>
</template>

<script setup>
    import theme from "../assets/background.png"
    import SkillBar from "../components/Skillbar.vue"
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

    .competences {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }

       .comp-container {
        border-radius: 2rem;
        border: 0.1rem solid white;
        text-align: center;
        padding: 2rem;
        width: 400px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        box-shadow: 10px 10px 20px black;
        background-color: #404e3b;
    }

    p, h1 {
        color: #404e3b;
        text-shadow: 10px 10px 20px #404e3b;
    }
</style>
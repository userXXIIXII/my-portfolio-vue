<template>
    <section class="footer">
        <div class="icon-container">
            <a href="https://github.com/userXXIIXII" target="_blank"> 
                <img src="../assets/github.png" alt="github icon" class="icon">
            </a>  
            <a href="https://www.instagram.com/arcadia.dev/" target="_blank">
                <img src="../assets/insta.png" alt="linkedin icon" class="icon">
            </a>     
            <a href="www.linkedin.com/in/aarin-deb" target="_blank">
                <img src="../assets/linkedin.png" alt="linkedin icon" class="icon">
            </a>                  
        </div>
        <div class="update">
            <p class="update">
                Dernière mise à jour : {{ currentYear }}
            </p>
        </div>
    </section>
</template>

<script setup>
    const currentYear = new Date().getFullYear()
</script>

<style scoped>
    .footer {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #16161a;
        height: 100px;
    }

    .icon {
        height: 40px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .icon-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .update {
        font-size: 0.875rem;
        color: #9ca3af; /* gris clair */
}

    @media (max-width: 768px) {
        p {
            font-size: 0.8rem;
        }

        .icon{
            height: 30px;
        }
    }


</style>
<template>
  <div class="skill">
    <div class="skill-header">
      <span>{{ name }}</span>
      <span>{{ level }}%</span>
    </div>

    <div class="progress-bar">
      <div
        class="progress"
        :style="{ width: level + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  level: Number
})
</script>

<style scoped>
  .skill {
  margin-bottom: 24px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #e6e6e6; /* gris foncé */
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #e6e6e6; /* gris clair */
  border-radius: 999px;
  overflow: hidden;
}

.progress {
  height: 100%;
  width: 0;
  background: linear-gradient(
    90deg,
    #7B9669, /* bleu */
    #6C8480  /* cyan */
  );
  border-radius: 999px;
  transition: width 1s ease-in-out;
}

</style>
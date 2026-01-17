<template>
  <div class="skill">
   <div class="skill-header">
      <div class="skill-info">
        <img v-if="image" :src="image" :alt="name" class="skill-icon" />
        <span class="skill-name">{{ name }}</span>
      </div>
      <span class="skill-level">{{ level }}%</span>
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
  level: Number,
  image: String
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
}

.skill-info {
  display: flex;
  align-items: center; 
  gap: 10px;           
}

.skill-name {
  font-weight: 600;
}

.skill-level {
  font-weight: 500;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #fffffe; 
  border-radius: 999px;
  overflow: hidden;
}

.progress {
  height: 100%;
  width: 0;
  background-color: #7f5af0;
  border-radius: 999px;
  transition: width 1s ease-in-out;
}

.skill-icon {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

</style>
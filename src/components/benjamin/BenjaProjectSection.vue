<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-center mb-6">My Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id"
        class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
        <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover rounded-md mb-4" />
        <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-blue-500 hover:underline text-sm">
          View Project
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import getBenjaProjects from "@/modules/getBenjaProjects";

const projects = ref([]);

onMounted(() => {
  projects.value = getBenjaProjects();
});
</script>

<!-- lang="" determines what kind of styling language you are using, that can be either css or scss -->
<!-- scoped determines if the styling you set is global or not. Your styling will only target elements made in this view if scoped -->
<style lang="scss" scoped></style>
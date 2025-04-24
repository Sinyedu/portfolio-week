<template>
  <section id="projects" class="py-20 bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center">
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white pb-12 relative">
          My Projects
          <span
            class="absolute bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-indigo-500"
          ></span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative overflow-hidden group rounded-t-xl">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              class="absolute inset-0 hidden sm:flex bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end"
            >
              <div class="p-4 w-full flex justify-between items-center gap-2 flex-wrap">
                <a
                  :href="project.link"
                  target="_blank"
                  class="px-4 py-2 bg-slate-900 text-slate-800 rounded-md hover:bg-teal-500 hover:text-white transition-colors text-sm font-medium"
                >
                  View Code
                </a>
                <a
                  v-if="project.website"
                  :href="project.website"
                  target="_blank"
                  class="px-4 py-2 bg-slate-900 text-slate-800 rounded-md hover:bg-indigo-500 hover:text-white transition-colors text-sm font-medium"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-slate-900 p-6 rounded-b-xl">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white">
                {{ project.title }}
              </h3>

              <div class="sm:hidden flex gap-2">
                <a
                  :href="project.link"
                  target="_blank"
                  class="px-4 py-2 bg-teal-900 text-white rounded-md text-sm font-medium shadow hover:bg-teal-600 transition-colors"
                >
                  View Code
                </a>
                <a
                  v-if="project.website"
                  :href="project.website"
                  target="_blank"
                  class="px-4 py-2 bg-indigo-700 text-white rounded-md text-sm font-medium shadow hover:bg-indigo-500 transition-colors"
                >
                  View Site
                </a>
              </div>
            </div>

            <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, techIndex) in project.techstack.split(', ')"
                :key="techIndex"
                class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
// Importing the getSimonProjects function from the module
// This function returns an array of project objects with details like title, description, image, etc.
import getSimonProjects from "@/modules/getSimonProject";

const projects = ref(getSimonProjects());
// handling the animation of the project cards
// This function will add the "show" class to the project cards when they come into view
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.project-card.show {
  opacity: 1;
  transform: translateY(0);
}
</style>

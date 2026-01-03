<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-56 h-56 md:w-64 md:h-64">
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 blur-md"
            ></div>
            <img
              src="@/assets/simonimg.jpg"
              alt="Simon Nyblom"
              class="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800"
            />
          </div>
        </div>

        <div
          ref="hero"
          class="max-w-3xl opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
            Simon Nyblom
          </h1>

          <p class="mt-3 text-xl text-slate-600 dark:text-slate-300">Full-stack developer</p>

          <div class="mt-6 h-px w-24 bg-gradient-to-r from-teal-500 to-indigo-500"></div>

          <ul class="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <li class="flex items-start gap-3">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              Based in Denmark · 23 years old
            </li>

            <li class="flex items-start gap-3">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Focus on clean architecture, UX, and performance
            </li>

            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              Enjoys simplifying systems and removing unnecessary complexity
            </li>

            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Slightly obsessed with tiny performance improvements
            </li>
          </ul>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              class="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-90 transition"
            >
              View projects
            </a>

            <a
              href="#about"
              class="px-6 py-3 rounded-full font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              About me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const hero = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-6");
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(hero.value);
});
</script>

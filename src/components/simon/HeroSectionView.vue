<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
      <div class="relative mb-8 group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-500"
        ></div>
        <img
          src="@/assets/simonimg.jpg"
          alt="Profile Image"
          class="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-slate-800"
        />
      </div>

      <h1 class="text-4xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white">
        <span class="inline-block animate-slideFromBottom pr-[10px]">Hi, I'm </span>
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500 inline-block animate-slideFromBottom animation-delay-200"
          >Simon</span
        >
      </h1>

      <p
        class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl animate-slideFromBottom animation-delay-400"
      >
        Full Stack Developer passionate about creating beautiful, functional web experiences
      </p>

      <div class="flex flex-wrap justify-center gap-4 animate-slideFromBottom animation-delay-600">
        <a
          href="#projects"
          class="px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-500 hover:from-slate-900 hover:to-slate-100 text-white rounded-full font-medium shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1"
        >
          View My Work
        </a>
        <a
          href="#about"
          class="px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-500 hover:from-slate-900 hover:to-slate-100 text-white rounded-full font-medium shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1"
        >
          About Me
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("animate-slideFromBottom");
        } else {
          el.classList.remove("animate-slideFromBottom");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-slideFromBottom").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
@keyframes slideFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideFromBottom {
  animation: slideFromBottom 0.8s ease forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}
</style>

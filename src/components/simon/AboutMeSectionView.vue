<template>
  <section
    id="about"
    class="py-20 relative flex flex-col items-center bg-slate-50 dark:bg-slate-800/50"
  >
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-300/10 dark:bg-teal-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-6">
      <div class="flex flex-col items-start mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12 relative">
          About Me
          <span
            class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-indigo-500"
          ></span>
        </h2>
      </div>

      <div class="flex flex-col gap-12 items-center pt-5 lg:flex-row lg:gap-0 lg:items-start">
        <div class="lg:col-span-3 order-1 lg:order-2">
          <div class="prose prose-slate dark:prose-invert max-w-none">
            <ul class="text-lg leading-relaxed mb-6 text-white space-y-4">
              <!--  // Made it a List because it looks better and is easier to read -->
              <li>
                🔹 Full Stack Developer with a passion for creating beautiful web experiences.
              </li>
              <li>🔹 Passionate about programming and exploring new technologies.</li>
              <li>🔹 Always excited to learn new languages and tools to build cool projects.</li>
              <li>
                🔹 Enjoy gaming, hanging out with friends, and going for walks (especially if they
                end with a beer 🍻).
              </li>
              <li>
                🔹 Enthusiast for helping others learn to code and sharing knowledge with the
                community.
              </li>
              <li>
                🔹 Focused on constant improvement, keeping up with frontend technologies, and
                mastering frameworks.
              </li>
              <li>🔹 Curious about automation, CI/CD, and exploring new areas of development.</li>
              <li>
                🔹 Learning languages like German and Swedish to connect with people across
                cultures.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-6">
      <div class="w-full flex flex-col pt-5 items-center md:items-start">
        <h3
          class="w-full text-4xl font-semibold mb-6 text-white dark:text-slate-200 pb-5 text-center md:text-left"
        >
          Tech Stack
        </h3>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="w-[calc(100%/2.5-1rem)] sm:w-[calc(100%/3.2-1rem)] md:w-[calc(100%/4-1rem)] lg:w-[calc(100%/6-1rem)] bg-teal-500 text-black px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:bg-teal-600 hover:shadow-xl text-center"
        >
          {{ tech }}
        </div>
      </div>
    </div>

    <h3 class="text-4xl font-semibold mb-6 text-slate-700 dark:text-slate-200 pt-20">
      Connect With Me
    </h3>

    <div class="flex gap-12 mb-12">
      <a href="https://github.com/Sinyedu" class="social-icon-link" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/simonnyblom/" class="social-icon-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      </a>
      <a href="https://www.facebook.com/simon.nyblom" class="social-icon-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-12 w-12"
          fill="currentColor"
        >
          <path
            d="M22.675 0H1.325C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V9.418c0-3.095 1.75-4.794 4.497-4.794 1.307 0 2.676.246 2.676.246v2.945h-1.51c-1.486 0-1.954.924-1.954 1.868v2.386h3.367l-.537 3.622h-2.83V24h5.555c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
// Making my tech stack dynamic
// This is a simple array of strings representing the tech stack
const techStack = [
  "Vue",
  "React",
  "Tailwind",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Firebase",
  "PHP",
  "WordPress",
  "Svelte",
  "Python",
  "Git",
  "GitHub",
  "Figma",
  "Postman",
  "Vercel",
  "C#",
];
</script>

<style scoped></style>

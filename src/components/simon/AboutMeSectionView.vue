<template>
  <section id="about" class="hero-section">
    <div class="content">
      <h2 class="title">
        About Me
        <span class="underline"></span>
      </h2>

      <div class="textContent">
        <p>💻 Full Stack dev. I make websites that don’t just work—they vibe.</p>
        <p>🧠 Always learning new tech, sometimes languages (human ones too!).</p>
        <p>🎮 Gamer, friend-hanger, occasional beer connoisseur 🍻.</p>
        <p>🤓 Love helping others code & nerding out over frameworks.</p>
        <p>🚀 Curious about automation, CI/CD, and “what else can I break today?”</p>
      </div>

      <h3 class="sectionTitle">Tech Stack</h3>
      <div class="techStack">
        <div v-for="(tech, index) in techStack" :key="index" class="techItem">
          {{ tech }}
        </div>
      </div>

      <h3 class="sectionTitle">Connect With Me</h3>
      <div class="socialLinks">
        <a href="https://github.com/Sinyedu" target="_blank" class="socialIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/simonnyblom/" class="socialIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  "Python",
  "Git",
  "Figma",
  "Postman",
  "Vercel",
];
</script>

<style scoped>
.hero-section {
  padding: 5rem 2rem;
  text-align: center;
  background-color: #131419;
  position: relative;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  position: relative;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 2rem;
}

.underline {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background: linear-gradient(to right, #14b8a6, #6366f1);
  border-radius: 2px;
}

.textContent p {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  opacity: 0;
  transform: translateY(-20px);
  color: #ffffff;
  animation: fadeDown 0.6s ease-out forwards;
}

.textContent p:nth-child(1) {
  animation-delay: 0.1s;
}
.textContent p:nth-child(2) {
  animation-delay: 0.25s;
}
.textContent p:nth-child(3) {
  animation-delay: 0.4s;
}
.textContent p:nth-child(4) {
  animation-delay: 0.55s;
}
.textContent p:nth-child(5) {
  animation-delay: 0.7s;
}

.techStack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.techItem {
  background-color: #14b8a6;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.techItem:hover {
  background-color: #0d9488;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.socialLinks {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.socialIcon {
  width: 3rem;
  height: 3rem;
  color: #1e293b;
  transition: all 0.3s ease;
}

.socialIcon:hover {
  transform: translateY(-5px);
  color: #14b8a6;
}

@media (max-width: 768px) {
  .techStack {
    gap: 0.5rem;
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

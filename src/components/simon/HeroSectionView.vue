<template>
  <section id="hero" class="hero">
    <div class="content">
      <div ref="imageWrapper" class="imageWrapper">
        <img src="@/assets/simonimg.jpg" alt="Simon Nyblom" class="image" />
      </div>

      <div ref="textContent" class="textContent">
        <h1 class="title">Simon Nyblom</h1>
        <p class="subtitle">Full-stack developer & web tinkerer</p>
      </div>

      <nav ref="nav" class="nav">
        <a href="#about"><span>About</span></a>
        <a href="#projects"><span>Projects</span></a>
        <a href="#contact"><span>Contact</span></a>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const imageWrapper = ref(null);
const textContent = ref(null);
const nav = ref(null);

onMounted(() => {
  setTimeout(() => imageWrapper.value.classList.add("show"), 100);
  setTimeout(() => textContent.value.classList.add("show"), 400);
  setTimeout(() => nav.value.classList.add("show"), 600);
});
</script>

<style scoped>
.nav a:hover,
.nav a:focus,
.nav a:active {
  background-color: transparent !important;
}
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background-color: #131419;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.imageWrapper {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeDown 0.8s ease-out forwards;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.imageWrapper.show {
  opacity: 1;
  transform: translateY(0);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textContent {
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeDown 0.6s ease-out forwards;
}

.textContent.show {
  opacity: 1;
  transform: translateY(0);
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.7;
  color: #ffffff;
  max-width: 600px;
  line-height: 1.6;
}

.nav {
  display: flex;
  gap: 3rem;
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeDown 0.6s ease-out forwards;
}

.nav.show {
  opacity: 1;
  transform: translateY(0);
}

.nav a {
  position: relative;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ffffff;
  transition: all 0.3s ease;
}

.nav a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffffff;
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.nav a span {
  display: block;
  color: inherit;
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .imageWrapper {
    width: 250px;
    height: 250px;
  }

  .nav {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .nav a {
    font-size: 1.4rem;
  }
}
</style>

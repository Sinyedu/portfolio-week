<!-- filepath: c:\Users\Benja\OneDrive\Skrivebord\Coding\portfolio-week\src\components\benjamin\BenjaHeroSection.vue -->
<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to My Portfolio</h1>
      <p class="hero-description">
        Discover my work, skills, and projects. Let's create something amazing together.
      </p>
    </div>
    <div class="hero-image-container">
      <div class="hero-image-wrapper">
        <img src="@/assets/Benjamin.png" alt="Placeholder" class="hero-image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BenjaHeroSection",
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 80vh;
}

.hero-content {
  max-width: 50%;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.hero-image-container {
  max-width: 45%;
  overflow: hidden;
}

.hero-image-wrapper {
  position: relative;
  display: inline-block;
}

.hero-image {
  width: 60%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  opacity: 0;
  animation: fadeIn 1.5s ease-in forwards;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.hero-image-wrapper::before {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  z-index: -1;
  background: radial-gradient(circle, #1e3a8a, #ffffff);
  border-radius: 12px;
  /* filter: blur(20px); */
  /* opacity: 0.8; */
  animation: gradientAnimation 3s infinite alternate;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes gradientAnimation {
  0% {
    transform: scale(1);
    background: radial-gradient(circle, #1e3a8a, #ffffff);
  }

  50% {
    transform: scale(1.05);
    background: radial-gradient(circle, #ffffff, #1e3a8a);
  }

  100% {
    transform: scale(1);
    background: radial-gradient(circle, #1e3a8a, #ffffff);
  }
}
</style>
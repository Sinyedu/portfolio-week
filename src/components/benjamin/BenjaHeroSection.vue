<template>
  <section id="hero" class="hero-section">

    <div class="container">
      <div class="profile-image-wrapper">
        <div class="gradient-border"></div>
        <img src="@/assets/Benjamin.png" alt="Profile Image" class="profile-image" />
      </div>

      <h1 class="hero-title">
        <span class="greeting">Yo, I am </span>
        <span class="name">Benjamin</span>
      </h1>

      <p class="hero-description">
        Educated and self-taught full stack developer with a passion for creating web applications that are not only
        functional but also visually appealing.
      </p>

      <div class="button-group">
        <a href="#projects" class="button">View My Work</a>
        <a href="#about" class="button">About Me</a>
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

<style scoped lang="scss">
@import "@/assets/_vars.scss";

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: $background-color;

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;

    .profile-image-wrapper {
      position: relative;
      margin-bottom: 2rem;

      .gradient-border {
        position: absolute;
        inset: -0.125rem;
        background: $gradient-color;
        border-radius: 50%;
        opacity: 0.75;
        filter: blur(4px);
        transition: opacity 0.5s;

        &:hover {
          opacity: 1;
        }
      }

      .profile-image {
        position: relative;
        width: 12rem;
        height: 12rem;
        z-index: 2;

        @media (min-width: 768px) {
          width: 16rem;
          height: 16rem;
        }

        object-fit: cover;
        border-radius: 50%;
        border: 0.25rem solid #fff;

        @media (prefers-color-scheme: dark) {
          border-color: #1e293b;
        }
      }
    }

    .hero-title {
      font-size: 2.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: #1e293b;
      z-index: 2;

      @media (min-width: 768px) {
        font-size: 3.75rem;
      }

      .greeting {
        display: inline-block;
        animation: slideFromBottom 0.8s ease forwards;
        padding-right: 0.625rem;
        z-index: 2;
        color: $highlight-color;
      }

      .name {
        display: inline-block;
        background: $gradient-color;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: slideFromBottom 0.8s ease forwards;
        animation-delay: 0.2s;
      }
    }

    .hero-description {
      font-size: 1.25rem;
      color: $main-color;
      margin-bottom: 2rem;
      max-width: 40rem;
      animation: slideFromBottom 0.8s ease forwards;
      animation-delay: 0.4s;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      animation: slideFromBottom 0.8s ease forwards;
      animation-delay: 0.6s;

      .button {
        padding: 0.75rem 2rem;
        background: $gradient-color;
        color: $text-color;
        border-radius: 9999px;
        font-weight: 500;
        box-shadow: 0 4px 6px rgba(45, 212, 191, 0.2);
        transition: all 0.3s ease;
        transform: translateY(0);

        &:hover {
          background: $gradient-hover;
          box-shadow: 0 6px 8px rgba(45, 212, 191, 0.4);
          transform: translateY(-0.25rem);
        }
      }
    }
  }
}

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
</style>

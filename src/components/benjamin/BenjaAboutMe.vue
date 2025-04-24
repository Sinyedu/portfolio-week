<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">My Tech Stack</h2>
      <p class="stack-description">
        I am proficient in a variety of technologies, including:
      </p>
      <div class="tech-stack">
        <div class="carousel">
          <div class="carousel-track">
            <div class="carousel-slide" v-for="(icon, index) in duplicatedIcons" :key="index">
              <img :src="icon.src" :alt="icon.alt" />
            </div>
          </div>
        </div>
      </div>
      <p class="about-description">
        My journey in web development began as a hobby, but it quickly turned into a full-fledged career choice. I am
        constantly learning and adapting to new technologies, and I am always eager to take on new challenges. <br><br>
        My
        goal
        is to create web applications that are not only functional but also visually appealing. I believe that a great
        user experience is key to the success of any web application, and I strive to achieve that in every project I
        work on. I am passionate about coding and enjoy the process of problem-solving and finding efficient solutions.
        <br><br>
        I am always looking for opportunities to grow and improve my skills, and I am excited to see where this journey
        will take me. I am open to new opportunities and collaborations, and I look forward to connecting with
        like-minded
        individuals in the tech community. If you are interested in working together or have any questions, feel free to
        reach out to me. I am always happy to chat and share ideas. <br><br>Thank you for visiting my portfolio.
      </p>
    </div>
  </section>
</template>

<script setup>
const icons = [
  { src: new URL('@/assets/icons/html5.svg', import.meta.url).href, alt: 'HTML5' },
  { src: new URL('@/assets/icons/css3.svg', import.meta.url).href, alt: 'CSS3' },
  { src: new URL('@/assets/icons/javascript.svg', import.meta.url).href, alt: 'JavaScript' },
  { src: new URL('@/assets/icons/typescript.svg', import.meta.url).href, alt: 'TypeScript' },
  { src: new URL('@/assets/icons/vuejs.svg', import.meta.url).href, alt: 'Vue.js' },
  { src: new URL('@/assets/icons/react.svg', import.meta.url).href, alt: 'React' },
  { src: new URL('@/assets/icons/firebase.svg', import.meta.url).href, alt: 'Firebase' },
]

const duplicatedIcons = [...icons, ...icons]
</script>

<style scoped lang="scss">
@import "@/assets/_vars.scss";

.section-title {
  font-size: 2.4rem;
  color: $main-color;
  margin-bottom: 1rem;
  text-align: center;
  animation: slideFromBottom 0.8s ease forwards;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

.stack-description {
  font-size: 1.6rem;
  color: $main-color;
  margin-bottom: 2rem;
  text-align: center;
  animation: slideFromBottom 0.8s ease forwards;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.about-section {
  background: $background-color-dark;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-description {
  font-size: 1.4rem;
  color: $main-color;
  margin-bottom: 2rem;
  animation: slideFromBottom 0.8s ease forwards;
  animation-delay: 0.4s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.container {
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

.tech-stack {
  overflow: hidden;
  margin-top: 2rem;
  width: 100%;

  .carousel {
    width: 100%;
    position: relative;

    .carousel-track {
      display: flex;
      gap: 8rem;
      animation: scroll-left 30s linear infinite;
      width: max-content;
    }

    .carousel-slide {
      flex-shrink: 0;

      img {
        width: 100px;
        height: 100px;
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-52.1%);
  }
}
</style>

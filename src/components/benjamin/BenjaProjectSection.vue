<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="header">
        <h2>
          My Projects
          <span class="header-underline"></span>
        </h2>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="project.id" class="project-card"
          :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-image" />

            <div class="project-overlay">
              <div class="project-links">
                <a :href="project.link" target="_blank" class="view-code">
                  View Code
                </a>
                <a v-if="project.website" :href="project.website" target="_blank" class="view-site">
                  View Site
                </a>
              </div>
            </div>
          </div>

          <div class="project-details">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <div class="mobile-links">
                <a :href="project.link" target="_blank" class="view-code-mobile">
                  View Code
                </a>
                <a v-if="project.website" :href="project.website" target="_blank" class="view-site-mobile">
                  View Site
                </a>
              </div>
            </div>

            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="project-techstack">
              <span v-for="(tech, techIndex) in project.techstack.split(', ')" :key="techIndex" class="tech-badge">
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
import getBenjaProjects from "@/modules/getBenjaProjects";

const projects = ref([]);

onMounted(() => {
  projects.value = getBenjaProjects();
});
</script>

<style scoped lang="scss">
@import "@/assets/_vars.scss";

.projects-section {
  padding: 5rem 0;
  background-color: $background-color;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: $main-color;
      position: relative;
      padding-bottom: 3rem;

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }

      .header-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.25rem;
        background: $gradient-color;
      }
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 6rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .project-card {
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem;
    overflow: hidden;

    .project-image-wrapper {
      position: relative;
      overflow: hidden;

      .project-image {
        width: 100%;
        height: 12rem;
        object-fit: cover;
        transition: transform 0.7s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      .project-overlay {
        position: absolute;
        inset: 0;
        display: none;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
        align-items: flex-end;

        @media (min-width: 640px) {
          display: flex;
        }

        &:hover {
          opacity: 1;
        }

        .project-links {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;

          a {
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            transition: background-color 0.3s ease, color 0.3s ease;

            &.view-code {
              background-color: $main-color;
              color: $text-color;

              &:hover {
                background-color: $highlight-color;
                color: $text-color;
              }
            }

            &.view-site {
              background-color: $secondary-color;
              color: $text-color;

              &:hover {
                background-color: $highlight-color;
                color: $text-color;
              }
            }
          }
        }
      }
    }

    .project-details {
      background-color: $text-color;
      padding: 1.5rem;
      border-radius: 0 0 0.75rem 0.75rem;

      .project-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        @media (min-width: 640px) {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: bold;
          color: $main-color;
        }

        .mobile-links {
          display: flex;
          gap: 0.5rem;

          a {
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;

            &.view-code-mobile {
              background-color: $main-color;
              color: $text-color;

              &:hover {
                background-color: $highlight-color;
              }
            }

            &.view-site-mobile {
              background-color: $secondary-color;
              color: $text-color;

              &:hover {
                background-color: $highlight-color;
              }
            }
          }
        }
      }

      .project-description {
        color: $accent-color;
        font-size: 0.875rem;
        margin-bottom: 1rem;
      }

      .project-techstack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tech-badge {
          padding: 0.25rem 0.75rem;
          background-color: $background-color;
          color: $main-color;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }
      }
    }
  }
}
</style>

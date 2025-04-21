<script setup>
import { RouterLink, RouterView } from 'vue-router'

// function toggleTheme() {
//   const isDarkMode = event.target.checked
//   document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
// }
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/simon">Simon</RouterLink>
      <RouterLink to="/benjamin">Benjamin</RouterLink>
    </nav>

    <!-- <div class="themeToggle">
        <label class="switch">
          <input type="checkbox" @change="toggleTheme" />
          <span class="slider"></span>
        </label>
      </div> -->
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  max-width: 100vw;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  height: 50px;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 16px;
}

nav a:first-of-type {
  border: 0;
}

/* .themeToggle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-border);
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--color-text);
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--color-text);
}

input:checked + .slider:before {
  transform: translateX(26px);
} */

/* Example of an unnecessary media query */
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

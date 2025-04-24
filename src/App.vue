<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <nav class="text-white">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/simon">Simon</RouterLink>
      <RouterLink to="/benjamin">Benjamin</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  max-width: 100vw;
  background-color: #1d293d;
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
</style>

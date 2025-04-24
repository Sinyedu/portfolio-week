<template>
  <div class="home">
    <div class="intro-box">
      <h1>Welcome to <span class="duo">Duofolio</span> 🎭</h1>
      <p class="tagline">Where two minds collide, and creativity *explodes* 💥</p>
      <p>
        We're just two slightly chaotic geniuses trying to make cool things, break stuff (on
        purpose, usually), and pretend we know what we’re doing 😎.
      </p>
      <p>
        Explore our stuff. Stay a while. Laugh. Cry. Question your life choices. You know, the
        usual.
      </p>
      <button @click="goToProjects">Check out the magic ✨</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      alert("Imagine this takes you to the portfolio page...");
    },
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  padding: 2rem;
  font-family: "Comic Sans MS", cursive, sans-serif;
}

.intro-box {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  text-align: center;
}

.duo {
  color: #ff4d6d;
  font-weight: bold;
  font-size: 2rem;
}

.tagline {
  font-style: italic;
  margin-bottom: 1rem;
}

button {
  margin-top: 2rem;
  background-color: #ff4d6d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}
</style>

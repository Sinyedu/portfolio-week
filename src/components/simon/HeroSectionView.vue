<template>
    <div class="hero-section">
        <div class="content">
            <img src="@/assets/simonimg.jpg" alt="Your Image" class="profile-image" />
            <h1 class="message">Welcome to My Portfolio</h1>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    .content {
        text-align: center;
        opacity: 0;
        animation: fadeIn 2s ease-in forwards;
    }

    .profile-image {
        width: 450px;
        height: 450px;
        border-radius: 100%;
        margin-bottom: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .message {
        font-size: 2rem;
        color: #333;
        font-weight: bold;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
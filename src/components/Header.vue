<template>
  <header>
    <img src="/stranger-chat-logo.png" alt="Stranger Chat Logo" class="logo" />
    <div class="center-content">
      <div class="slogan">Free chat - Talk with random strangers freely anonymously</div>
      <h1>Stranger Chat</h1>
      <div class="user-count" v-if="userCount > 0">{{ userCount }} online</div>
    </div>
    <button @click="$emit('toggle-theme')" class="theme-toggle">{{ isDark ? '☀️' : '🌙' }}</button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isDark: Boolean,
    userCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggle-theme']
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
}

.logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.slogan {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}

.user-count {
  font-size: 0.8rem;
  color: #4CAF50;
  font-weight: bold;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: rgba(76, 175, 80, 0.1);
  border-radius: 0.25rem;
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: inherit;
}
</style>
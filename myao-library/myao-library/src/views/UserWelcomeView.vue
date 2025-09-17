<template>
  <div class="welcome">
    <h1>Welcome {{ username }} ~^_^~</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';

export default {
  setup() {
    const username = ref('');

    onMounted(() => {
      const auth = getAuth();
      if (auth.currentUser) {
        username.value = auth.currentUser.email.split('@')[0];
      }
    });

    return {
      username
    };
  }
};
</script>

<style scoped>
.welcome {
  text-align: center;
  margin-top: 100px;
}

.welcome h1 {
  font-size: 48px;
  font-weight: normal;
  color: #333;
}
</style>

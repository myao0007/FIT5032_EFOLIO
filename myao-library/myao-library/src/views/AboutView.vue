
<template>
  <div class="about">
    <h1>About Our Library</h1>
    <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { getAuth } from 'firebase/auth';

onMounted(() => {
  const auth = getAuth();
  console.log('About page loaded');
  console.log('Current user:', auth.currentUser);
  if (auth.currentUser) {
    console.log('Admin user logged in:', auth.currentUser.email);
  }
});
</script>

<style>
.about {
  text-align: center;         
  margin-top: 100px;         
}

.about h1 {
  margin-bottom: 20px;         
}

</style>
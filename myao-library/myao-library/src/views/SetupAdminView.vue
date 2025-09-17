<template>
  <div class="setup-admin">
    <h1>Setup Admin User</h1>
    <p>This page helps you set up the admin user for role-based authentication.</p>
    
    <div class="instructions">
      <h3>Instructions:</h3>
      <ol>
        <li>First, register a new user with email: <strong>admin@admin.com</strong> and password: <strong>admin1234</strong></li>
        <li>Then click the button below to set the admin role</li>
        <li>Or manually add the role in Firestore console</li>
      </ol>
    </div>
    
    <button @click="setupAdmin" :disabled="loading">
      {{ loading ? 'Setting up...' : 'Setup Admin Role' }}
    </button>
    
    <div v-if="message" class="message" :class="{ success: isSuccess, error: !isSuccess }">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth } from 'firebase/auth';
import db from '../Firebase/init.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const loading = ref(false);
const message = ref('');
const isSuccess = ref(false);

const setupAdmin = async () => {
  loading.value = true;
  message.value = '';
  
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      message.value = 'Please login first with admin@admin.com';
      isSuccess.value = false;
      return;
    }
    
    if (currentUser.email !== 'admin@admin.com') {
      message.value = 'Please login with admin@admin.com account';
      isSuccess.value = false;
      return;
    }
    
    // Set user role to admin
    await setDoc(doc(db, 'users', currentUser.uid), {
      email: 'admin@admin.com',
      role: 'admin',
      username: 'admin',
      createdAt: new Date()
    }, { merge: true });
    
    message.value = 'Admin role set successfully! You can now login as admin.';
    isSuccess.value = true;
  } catch (error) {
    message.value = 'Error setting admin role: ' + error.message;
    isSuccess.value = false;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.setup-admin {
  text-align: center;
  margin-top: 100px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

.setup-admin h1 {
  font-size: 48px;
  font-weight: normal;
  color: #333;
  margin-bottom: 30px;
}

.instructions {
  text-align: left;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.instructions h3 {
  margin-top: 0;
  color: #333;
}

.instructions ol {
  margin: 10px 0;
}

.instructions li {
  margin: 8px 0;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px 0;
  font-size: 16px;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.message {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
}

.message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>

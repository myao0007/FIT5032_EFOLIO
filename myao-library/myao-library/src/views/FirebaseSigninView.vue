
<template>
  <div class="signin">
    <h1>Sign in</h1>
    <div class="form-group">
      <label>Email:</label>
      <input type="text" v-model="email" />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" v-model="password" />
    </div>
    <button @click="signin">Sign in</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import db from '../Firebase/init.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    
    // Redirect to home page after successful login
    router.push("/");
  } catch (error) {
    alert("Login failed");
  }
};
</script>

<style scoped>
.signin {
  text-align: center;
  margin-top: 100px;
}

.signin h1 {
  font-size: 48px;
  font-weight: normal;
  color: #333;
  margin-bottom: 50px;
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: inline-block;
  width: 80px;
  text-align: right;
  margin-right: 10px;
  color: #333;
}

.form-group input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>

<template>
  <div class="register">
    <h1>Create an Account</h1>
    <div class="form-group">
      <label>Email:</label>
      <input type="text" v-model="email" />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" v-model="password" />
    </div>
    <button @click="register">Create</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import db from '../Firebase/init.js';
import { doc, setDoc } from 'firebase/firestore';


const email = ref("");
const password = ref("");


const router = useRouter();


const auth = getAuth();


const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    
    // Create user document in Firestore with default role as user
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email: email.value,
      role: 'user',
      username: email.value.split('@')[0]
    });
    
    alert('Registration successful! Please login');
    router.push("/firelogin");
  } catch (error) {
    alert("Registration failed");
  }
};
</script>

<style scoped>
.register {
  text-align: center;
  margin-top: 100px;
}

.register h1 {
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
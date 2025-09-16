
<template>
  <div class="signin">
      <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Sign-in Successful!", data.user);
      router.push("/"); 
      console.log("Current user:", auth.currentUser); 
    })
    .catch((error) => {
      console.log("Sign-in failed:", error.code);
    });
};
</script>

<style scoped>
.signin {
  text-align: center;
  margin-top: 100px;
}

.signin h1 {
  margin-bottom: 20px;
}


</style>
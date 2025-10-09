<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()
const isLoggedIn = ref(false)
const userEmail = ref('')

onMounted(() => {
  // Check if user is logged in
  if (auth.currentUser) {
    isLoggedIn.value = true
    userEmail.value = auth.currentUser.email
  }
  
  // Listen for authentication state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn.value = true
      userEmail.value = user.email
    } else {
      isLoggedIn.value = false
      userEmail.value = ''
    }
  })
})

const logout = async () => {
  try {
    await signOut(auth)
    router.push('/')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>

        <!-- Show login and register buttons when not logged in -->
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/firelogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/fireregister" class="nav-link" active-class="active">Firebase Register</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
<!-- 
        <li class="nav-item">
          <router-link to="/logout-page" class="nav-link" active-class="active">Logout Page</router-link>
        </li> -->

        <!-- Show user info and logout button when logged in -->
        <li class="nav-item" v-if="isLoggedIn">
          <span class="nav-link">Welcome, {{ userEmail }}</span>
        </li>
        
        <li class="nav-item" v-if="isLoggedIn">
          <button class="btn nav-link" @click="logout">Logout</button>
        </li>

        <li class = "nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">Get Book Count</router-link>

        </li>

        <li class = "nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
        </li>

        <li class = "nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active"> Count BookAPI</router-link>
        </li>
        
      </ul>
    </header>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.nav-link.active {
  background-color: #007bff;
  color: white;
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
}
</style>

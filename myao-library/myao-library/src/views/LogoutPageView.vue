<template>
  <div class="logout-page">
    <h1>Log out page with developer console to show current user</h1>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const auth = getAuth()

// Listen and print current user when page opens
onAuthStateChanged(auth, (user) => {
  console.log('Current user:', user)
  if (user) {
    console.log('User email:', user.email)
    console.log('User UID:', user.uid)
  } else {
    console.log('No user logged in')
  }
})

// Logout function
const logout = async () => {
  try {
    await signOut(auth)
    console.log('User signed out')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<style scoped>
.logout-page {
  text-align: center;
  margin-top: 100px;
}

.logout-page h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>

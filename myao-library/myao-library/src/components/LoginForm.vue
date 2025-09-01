<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Login</h1>

        <form @submit.prevent="handleLogin">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="username" class="form-label">Username</label>
              <input
                id="username"
                type="text"
                class="form-control"
                v-model="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                :class="['form-control', { 'is-invalid': !!errors.username }]"
              />
              <div v-if="errors.username" class="invalid-feedback d-block">
                {{ errors.username }}
              </div>
            </div>

            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="password"
                
                @blur="() => { 
                  if (!(username === 'admin' && password === '1234')) validatePassword(true)
                  else errors.password = null
                }"
                @input="() => { 
                  if (!(username === 'admin' && password === '1234')) validatePassword(false)
                  else errors.password = null
                }"
                :class="['form-control', { 'is-invalid': !!errors.password }]"
              />
              <div v-if="errors.password" class="invalid-feedback d-block">
                {{ errors.password }}
              </div>
            </div>
          </div>

          <div class="text-danger mb-3" v-if="loginError">{{ loginError }}</div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'   
import { isAuthenticated } from '../store/auth'
import { findUser } from '../store/users'

const router = useRouter()
const route = useRoute()                          

const username = ref('')
const password = ref('')
const loginError = ref('') 


const errors = ref({
  username: null,
  password: null,
})

                        

const validateName = (blur=false) => {
  if (username.value.trim().length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}


const validatePassword = (blur=false) => {
  const minLen = 6
  if (password.value.length < minLen) {
    if (blur) errors.value.password = `Password must be at least ${minLen} characters`
  } else {
    errors.value.password = null
  }
}

const handleLogin = () => {
  
  loginError.value = ''

  
  const ok = !!findUser(username.value, password.value)
          || (username.value === 'admin' && password.value === '1234')

  if (ok) {
    isAuthenticated.value = true
    const back = route.query.redirect || '/about'
    router.push(back)
  } else {
    loginError.value = 'Invalid username or password'
  }
}
</script>
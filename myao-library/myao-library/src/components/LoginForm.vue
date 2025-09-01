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
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
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
import { useRouter } from 'vue-router'
import { isAuthenticated } from '@/store/auth'   // 见下方 auth.js

const router = useRouter()

// 只保留登录需要的两个字段
const username = ref('')
const password = ref('')

const errors = ref({
  username: null,
  password: null,
})

const loginError = ref('')

// 复用你注册页的校验风格（简化示例）
const validateName = (blur=false) => {
  if (username.value.trim().length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}
const validatePassword = (blur=false) => {
  if (password.value.length < 6) {
    if (blur) errors.value.password = 'Password must be at least 6 characters'
  } else {
    errors.value.password = null
  }
}

// 提交：硬编码账号密码，通过后设置 isAuthenticated 并跳转
const handleLogin = () => {
  validateName(true)
  validatePassword(true)

  if (!errors.value.username && !errors.value.password) {
    // 硬编码的凭证（按作业要求）
    const OK_USER = 'admin'
    const OK_PASS = '123456'

    if (username.value === OK_USER && password.value === OK_PASS) {
      isAuthenticated.value = true
      loginError.value = ''
      router.push('/about')
    } else {
      loginError.value = 'Invalid username or password'
    }
  }
}
</script>
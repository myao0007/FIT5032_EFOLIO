// src/store/users.js
import { ref } from 'vue'

export const users = ref(JSON.parse(localStorage.getItem('users') || '[]'))

export function addUser(user) {
  users.value.push(user)
  localStorage.setItem('users', JSON.stringify(users.value))
}

export function existsUser(username) {
  return users.value.some(u => u.username === username)
}

export function findUser(username, password) {
  return users.value.find(u => u.username === username && u.password === password)
}
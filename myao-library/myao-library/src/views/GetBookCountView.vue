<template>
  <div class="book-counter">
    <h1>Book Counter</h1>
    <button @click="getBookCount" class="count-button">Get Book Count</button>
    <div class="result-section">
      <p v-if="count !== null" class="count-result">Total number of books: {{ count }}</p>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: null,
      error: null,
    };
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get(
          'https://countbooks-dqvffu4xqq-uc.a.run.app'
        );
        this.count = response.data.count;
        this.error = null;
      } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = error;
        this.count = null;
      }
    },
  },
};
</script>

<style scoped>
.book-counter {
  text-align: center;
  margin-top: 100px;
}

.book-counter h1 {
  font-size: 48px;
  font-weight: normal;
  color: #333;
  margin-bottom: 50px;
  margin-top: 0;
  font-family: sans-serif;
}

.count-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 30px;
}

.count-button:hover {
  background-color: #0056b3;
}

.result-section {
  margin-top: 20px;
}

.count-result {
  font-size: 18px;
  color: #333;
  font-family: sans-serif;
  margin: 10px 0;
}

.error-message {
  font-size: 16px;
  color: #dc3545;
  font-family: sans-serif;
  margin: 10px 0;
}
</style>
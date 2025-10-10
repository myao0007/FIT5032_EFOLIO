<template>
    <div class="all-books-api">
      <h1>Get All Books API</h1>
      <button @click="getAllBooks" class="get-books-button">Get All Books</button>
      <div class="result-section">
        <p v-if="booksData !== null" class="count-display">Total number of books: {{ booksData.length }}</p>
        <pre v-if="booksData !== null" class="json-display">{{ JSON.stringify(booksData, null, 2) }}</pre>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import db from '../Firebase/init.js';
  import { collection, getDocs } from 'firebase/firestore';
  
  export default {
    setup() {
      const booksData = ref(null);
      const error = ref(null);

      const getAllBooks = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'books'));
          const books = [];
          querySnapshot.forEach((doc) => {
            books.push({ id: doc.id, ...doc.data() });
          });
          booksData.value = books;
          error.value = null;
        } catch (err) {
          console.error('Error fetching books:', err);
          error.value = err.message;
          booksData.value = null;
        }
      };

      // Auto-load books when component mounts
      onMounted(() => {
        getAllBooks();
      });

      return {
        booksData,
        error,
        getAllBooks
      };
    }
  };
  </script>

  <style scoped>
  .all-books-api {
    text-align: center;
    margin-top: 100px;
  }

  .all-books-api h1 {
    font-size: 48px;
    font-weight: normal;
    color: #333;
    margin-bottom: 50px;
    margin-top: 0;
    font-family: sans-serif;
  }

  .get-books-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 30px;
  }

  .get-books-button:hover {
    background-color: #0056b3;
  }

  .result-section {
    margin-top: 20px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .count-display {
    font-size: 18px;
    color: #333;
    font-family: sans-serif;
    margin: 10px 0 20px 0;
    font-weight: bold;
  }

  .json-display {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    padding: 20px;
    text-align: left;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #333;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 600px;
    overflow-y: auto;
  }

  .error-message {
    font-size: 16px;
    color: #dc3545;
    font-family: sans-serif;
    margin: 10px 0;
  }
  </style>
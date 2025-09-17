
<template> 
    <div class="booklist">
        <h1>Books with ISBN > 1000</h1>
        <table class="books-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ISBN</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id" class="book-row">
                    <td>{{ book.name }}</td>
                    <td>{{ book.isbn }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template >

<script>
import { ref, onMounted } from 'vue';
import db from '../Firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
        try{
            const q = query(collection(db, 'books'), where('isbn', '>', 1000));
            const querySnapshot = await getDocs(q);
            const bookArray = [];
            querySnapshot.forEach((doc) => {
                bookArray.push({ id: doc.id, ...doc.data() });

        });
            books.value = bookArray;
        } catch (error) {
            console.error('Error fetching books: ', error);
        }

      
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books
    };
  }
};


</script>

<style scoped>
.booklist {
  text-align: center;
  margin-top: 40px;
}

.books-table {
  width: 80%;
  max-width: 600px;
  border-collapse: collapse;
  margin: 20px auto;
}

.books-table th {
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
}

.books-table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.book-row:nth-child(even) {
  background-color: #f9f9f9;
}
</style>


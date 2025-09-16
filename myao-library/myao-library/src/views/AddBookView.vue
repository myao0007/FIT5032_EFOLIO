
<template> 
    <div class="add-book"> 
        <h1>Add Book</h1>
        <form @submit.prevent="addBook"> 
            <div>
                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" v-model="isbn" required />
            </div>

            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required />
            </div>

            <button type="submit">Add Book</button>

        </form>
            
    </div>
</template> 

<script>
import { ref } from 'vue';
import db from '../Firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';
//import BookList from '../components/BookList.vue';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook
    };
  }
};
</script>

<style scoped>
.add-book {
  text-align: center;
  margin-top: 100px;
}

.add-book h1 {
  margin-bottom: 20px;
}

.add-book div {
  margin-bottom: 15px; 
}

.add-book button {
  margin-top: 10px;   
  padding: 8px 16px;
  border: 1px solid #333;
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>

 

<template> 
    <div class="add-book"> 
        <h1>Add Book</h1>
        <form @submit.prevent="addBook"> 
            <div class="form-group">
                <label for="isbn">ISBN:</label>
                <input type="text" id="isbn" v-model="isbn" required />
            </div>

            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required />
            </div>

            <button type="submit">Add Book</button>

        </form>
        <BookList />
            
    </div>
</template> 

<script>
import { ref } from 'vue';
import db from '../Firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

export default {
    components: {
        BookList
    },
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

        // Try Firebase Function first, fallback to client-side processing
        try {
          const response = await fetch('https://us-central1-week7-yummy.cloudfunctions.net/capitalizeBook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookName: name.value })
          });
          
          if (response.ok) {
            const result = await response.json();
            var capitalizedName = result.capitalizedName;
            console.log('Used Firebase Function for capitalization');
          } else {
            throw new Error('Firebase Function not available');
          }
        } catch (functionError) {
          // Fallback to client-side processing
          var capitalizedName = name.value.toUpperCase();
          console.log('Used client-side processing for capitalization');
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: capitalizedName
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
        alert('Failed to add book. Please try again.');
      }
    };

    return {
      isbn,
      name,
      addBook
    };
  },
    components: {
        BookList
    }
  
};
</script>


<style scoped>
.add-book {
  text-align: center;
  margin-top: 100px;
}

.add-book h1 {
  font-size: 48px;
  font-weight: normal;
  color: #333;
  margin-bottom: 50px;
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: inline-block;
  width: 80px;
  text-align: right;
  margin-right: 10px;
  color: #333;
}

.form-group input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}


</style>

 
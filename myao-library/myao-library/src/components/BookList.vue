
<template> 
    <div class="booklist">
        <h1>Books with ISBN > 1000 (Ordered by ISBN, Limited to 5)</h1>
        <table class="books-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ISBN</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id" class="book-row">
                    <td>
                        <input v-if="editingBook === book.id" v-model="editName" class="edit-input" />
                        <span v-else>{{ book.name }}</span>
                    </td>
                    <td>
                        <input v-if="editingBook === book.id" v-model.number="editIsbn" class="edit-input" type="number" />
                        <span v-else>{{ book.isbn }}</span>
                    </td>
                    <td class="action-cell">
                        <div v-if="editingBook === book.id" class="edit-actions">
                            <button @click="updateBook(book.id)" class="save-btn" title="Save changes">
                                <i class="bi bi-check"></i>
                            </button>
                            <button @click="cancelEdit" class="cancel-btn" title="Cancel">
                                <i class="bi bi-x"></i>
                            </button>
                        </div>
                        <div v-else class="normal-actions">
                            <button @click="startEdit(book)" class="edit-btn" title="Edit book">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button @click="deleteBook(book.id)" class="delete-btn" title="Delete book">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template >

<script>
import { ref, onMounted } from 'vue';
import db from '../Firebase/init.js';
import { collection, query, where, orderBy, limit, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);
    const editingBook = ref(null);
    const editName = ref('');
    const editIsbn = ref(0);

    const fetchBooks = async () => {
        try{
            const q = query(collection(db, 'books'));
            const querySnapshot = await getDocs(q);
            const bookArray = [];
            querySnapshot.forEach((doc) => {
                bookArray.push({ id: doc.id, ...doc.data() });
            });
            
            // Client-side filtering: ISBN > 1000 (supports both number and string)
            const filteredBooks = bookArray.filter(book => {
                const isbn = parseInt(book.isbn);
                return isbn > 1000;
            });
            
            // Client-side sorting: sort by ISBN number
            filteredBooks.sort((a, b) => parseInt(a.isbn) - parseInt(b.isbn));
            
            books.value = filteredBooks;
            console.log("Query result:", filteredBooks);
        } catch (error) {
            console.error('Error fetching books: ', error);
            console.log("Trying without orderBy...");
            
            
            try {
                const q2 = query(
                    collection(db, 'books'),
                    where('isbn', '>', 1000),
                    orderBy('isbn'),
                    limit(5)
                );
                const querySnapshot2 = await getDocs(q2);
                const bookArray2 = [];
                querySnapshot2.forEach((doc) => {
                    bookArray2.push({ id: doc.id, ...doc.data() });
                });
                bookArray2.sort((a, b) => parseInt(a.isbn) - parseInt(b.isbn));
                books.value = bookArray2;
                console.log("Query result (without orderBy):", bookArray2);
            } catch (error2) {
                console.error('Error with second query: ', error2);
            }
        }
    };

    const deleteBook = async (bookId) => {
      try {
        await deleteDoc(doc(db, 'books', bookId));
        fetchBooks();
        alert('Book deleted successfully!');
      } catch (error) {
        console.error('Error deleting book: ', error);
        alert('Failed to delete book');
      }
    };

    const startEdit = (book) => {
      editingBook.value = book.id;
      editName.value = book.name;
      editIsbn.value = Number(book.isbn);
    };

    const cancelEdit = () => {
      editingBook.value = null;
      editName.value = '';
      editIsbn.value = 0;
    };

    const updateBook = async (bookId) => {
      try {
        const isbnNumber = Number(editIsbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }
        
        await updateDoc(doc(db, 'books', bookId), {
          name: editName.value,
          isbn: isbnNumber
        });
        
        fetchBooks();
        editingBook.value = null;
        editName.value = '';
        editIsbn.value = 0;
        alert('Book updated successfully!');
      } catch (error) {
        console.error('Error updating book: ', error);
        alert('Failed to update book');
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books,
      deleteBook,
      editingBook,
      editName,
      editIsbn,
      startEdit,
      cancelEdit,
      updateBook
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
  text-align: center;
}

.book-row:nth-child(even) {
  background-color: #f9f9f9;
}

.delete-btn {
  padding: 8px;
  background-color: transparent;
  color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background-color: #f8f9fa;
  color: #dc3545;
}

.edit-btn {
  padding: 8px;
  background-color: transparent;
  color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}

.edit-btn:hover {
  background-color: #f8f9fa;
  color: #007bff;
}

.save-btn {
  padding: 8px;
  background-color: transparent;
  color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}

.save-btn:hover {
  background-color: #f8f9fa;
  color: #28a745;
}

.cancel-btn {
  padding: 8px;
  background-color: transparent;
  color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel-btn:hover {
  background-color: #f8f9fa;
  color: #dc3545;
}

.edit-input {
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
}

.edit-actions, .normal-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-cell {
  text-align: center !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>


//import './assets/main.css'
//import './style.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyAzKHeZmP7E2Cgs0W5XLddcBcjJJxG1eXg",

  authDomain: "week7-yummy.firebaseapp.com",

  projectId: "week7-yummy",

  storageBucket: "week7-yummy.firebasestorage.app",

  messagingSenderId: "285861969452",

  appId: "1:285861969452:web:7e8aa5106a48cab5305b89"

};

// Initialize Firebase

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('DataTable', DataTable)
app.component('Column', Column)

app.use(router)
app.mount('#app')



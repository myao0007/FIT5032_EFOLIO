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



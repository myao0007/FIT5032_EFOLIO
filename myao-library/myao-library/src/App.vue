<script setup>
//import JSON from './components/JSON.vue' 
//import AttributeBinding from './components/AttributeBinding.vue'
//import LoginForm from './components/LoginForm.vue';
import BHeader from './components/BHeader.vue';
//import router from './router';
</script>

<template>
  <!--JSON /-->
  <!--AttributeBinding /-->
  
  <!--LoginForm /-->

  <div class="main-container">
    <header>
      <BHeader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>

</template>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: #275FDA;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}

.list-group-item {
    padding: 10px;
}
</style>

<script>
//import JSON from './components/JSON.vue' 
//import AttributeBinding from './components/AttributeBinding.vue'
//import LoginForm from './components/LoginForm.vue';
import BHeader from './components/BHeader.vue';
import CountBookAPI from './views/CountBookAPI.vue';

export default {
  name: 'App',
  components: {
    BHeader,
    CountBookAPI
  },
  computed:{
    showHeader(){
      return this.$route.name !== 'CountBookAPI';
    }
  }
  
};
//import router from './router';
</script>

<template>
  <div class="main-container">
    <header v-if = "showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
}

.main-box {
  padding: 20px;
  min-height: calc(100vh - 80px);
}

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

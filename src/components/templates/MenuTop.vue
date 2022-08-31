<template>
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Bottom navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Main</router-link>
          </li>

        </ul>
        <ul class="navbar-nav" v-if="user">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">{{user.name}}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">logout</a>
          </li>
        </ul>
        <ul class="navbar-nav" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import {ref, onMounted} from "vue";
//import {useRouter} from "vue-router";
export default {
  name: "MenuTop.vue",
  setup(){
    //const router = useRouter();
    const user = ref('');
    const logout = () => {
      localStorage.clear();
      //router.push('/');
      document.location.href= '/';
    }
    onMounted(async () => {
     const response = await axios.get('profile');
      user.value = response.data;
     //console.log(response);
    })
    return {
      logout,
      user
    }
  }
}
</script>

<style scoped>

</style>
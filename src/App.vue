<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to 잼넴 App"/> -->
  <v-app>
    <v-main>
      <router-view ></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  computed: {

  },
  data(){
    return {
    }
  },
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

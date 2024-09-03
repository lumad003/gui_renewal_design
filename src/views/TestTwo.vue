<template>
  <div>
    테스트 투투투투투
  </div>
  <div>
    쿼리 데이터
  </div>
  <div>
    {{ $route.query.exampleData }}
  </div>
  <div>
    파람 데이터
  </div>
  <div>
    {{ $route.params.test }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestTwo',
  mounted() {
    console.log(this.$route.query.exampleData);
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

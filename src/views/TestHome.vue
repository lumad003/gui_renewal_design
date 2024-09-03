<template>
  <div>
    <img :src="require('@/assets/logo.png')">
    <div>
      홈화면 입니다
    </div>
    <br>
    <br>
    <br>
    데이터 넘기기 : 1
    <div v-for="top in topList" :key="top">
      <button :class="`top-${top}`" @click="$router.push({path:`${top}`, query:{exampleData:1}})">
        {{ top }}
      </button>
    </div>

    <br>
    <br>
    <br>
    데이터 넘기기 : 99
    <div v-for="top in topList" :key="top">
      <button :class="`top-${top}`" @click="$router.push({path:`${top}`, query:{exampleData:99}})">
        {{ top }}
      </button>
    </div>


    <br>
    <br>
    <br>
    파라미터 추가
    <div v-for="top in topList" :key="top">
      <button :class="`top-${top}`" @click="$router.push({path:`${top}/test`, query:{exampleData:99}})">
        {{ top }}
      </button>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestHome',
  data(){
    return {
      topList: ["one", "two"]
    }
  },
})
</script>

<style>

.top-one{
  background: #eccccc;
}

.top-two{
  background: #ccecdb;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

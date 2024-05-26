<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <!--네비게이션 링크를 생성한다. to 속성을 사용하여 경로를 지정한다.-->
      <router-link to="/about">About</router-link>
      <!--현재 라우트에 맞는 컴포넌트를 렌더링하는 자리 표시자이다.-->
    </nav>
    <router-view></router-view>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

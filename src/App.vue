<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #abbaab;
  /* background: linear-gradient(to right, #304352, #d7d2cc); */
  background-color: #304352;
  height: 100vh;
  padding: 15rem 0 ;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: .17rem;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #fcfcfd;
}
</style>

<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/Home/Index'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
    width: 100%;
    height: 100%;
    /* position: absolute; */
}
</style>

<template>
    <div class="category">
        <router-view />
        分类页面
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.category{
    width: 100%;
    height: 100%;
    background: lightgreen;
}
</style>

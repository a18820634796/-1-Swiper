<template>
  <div class="shop">
      <router-view />
      商品页面
      </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.shop {
  width: 100%;
  height: 100%;
  background: orange;
}
</style>

<template>
    <div class="pageTwo">
        <getBack />
        <div class="swiper">
        </div>
    </div>
</template>
<script>
import getBack from '@/Home/components/getBack'
export default {
    components:{
        getBack
    }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.pageTwo{
    width: 100%;
    height: 100%;
    background: lightcoral;
}
</style>

<template>
    <div class="getBack" ><span class="getBackFont" @click="getBack()"></span></div>
</template>
<script>
export default {
    name: 'getBack',
    methods:{
        getBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.getBack{
    width: 100%;
    height: 40px;
    background: rgb(204, 204, 204);
}
.getBackFont{
    font-size: 30px;
    margin-left: 10px;
    width: 50px;
}
</style>

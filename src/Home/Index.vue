<template>
  <div id="all">
    <div class="content">
      <router-view />
    </div>
    <div class="topbar">
      <div 
        v-for="(item,index) in datas" 
        :key="index" 
        class="titleName"
        @click = "pushview(item)">
        {{item.title}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        { title: "首页", id: "001", name: "page" },
        { title: "商品", id: "002", name: "shop" },
        { title: "分类", id: "003", name: "category" }
      ]
    };
  },
  methods:{
    pushview(item){
      this.$router.push({path:item.name})
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#all {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-animation-name: all; /*动画名称*/
  -webkit-animation-duration: 2s;
}
@-webkit-keyframes all {
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
}
.content{
  width: 100%;
  height: 90%;
  top: 0;
  /* position: absolute; */
}
.topbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  background: lightgreen;
  display: flex;
  flex-direction: row;
  
}
.titleName {
   flex: 1;
  background: rgb(139, 255, 207);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

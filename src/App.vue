<template>
  <div class="app">
    <header></header>
    <section class="content">
      <nav class="nav">
        <van-tabs v-model="active" color="#f9c21c">
          <van-tab title="商品" to="/goods"></van-tab>
          <van-tab title="评价" to="/appraise"></van-tab>
          <van-tab title="商家" to="/shops"></van-tab>
        </van-tabs>
      </nav>
      <div class="wrapper">
        <!-- 底部站位 -->
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
   active = 0;
  // 方法

  // 钩子函数
  private created(){
    // this.active = 0;
  }
}
</script>
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
html,body{
  width: 100%;
  height: 100%;
}
.app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
header{
  height: 150px;
  background: url("./assets/imgs/bcpng.png") no-repeat;
  background-size: cover;
  background-position:  20% 45% ;
}
.content{
  height: calc(100vh - 200px);
}
.nav{
  height: 50px;
}
.wrapper{
  height: 100%;
}
</style>

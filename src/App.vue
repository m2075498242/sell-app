<template>
  <div class="app">
    <header>
      <div class="header dpflex fdc">
        <div class="img dpflex">
          <img src="./assets/imgs/bcpng.png" alt="" />
          <div class="title-right">
            <p>
              <span class="brand">品牌</span>
              <span>乡村基(天府新谷店)</span>
            </p>
            <p>美团专送/<span>38</span>分钟送达</p>
            <div class="nums dpflex">
              <p>
                <span class="reduce">减</span>
                <span class="nums-info">单人精彩套餐 VC无限橙果汁全...</span>
              </p>
              <p class="num-btn dpflex">
                <span>5个</span>
                <span>></span>
              </p>
            </div>
          </div>
        </div>
        <div class="notice-info">
          <span class="publicity">公告</span>
          <span>尊敬的客观,端午攻略2:1 6月1日当天在评价区分享... ></span>
        </div>
      </div>
    </header>
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
    <!-- 购物车 -->
    <div class="shop-car">
      <div class="car-left">
        <i class="iconfont">图标</i>
        <p>联系商家</p>
      </div>
      <div class="car-center">
        <van-badge :content="5">
          <i class="iconfont">图标</i>
        </van-badge>
      </div>
      <div class="car-right">右</div>
    </div>
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
  color: #fff;
  background-position:  50% 50% ;
  .header{
    width: 100%;
    height: 100%;
    justify-content: space-between;
    background-color: rgba(0,0,0,.3);
  }
}
.img{
  width: 100%;
  height: 80px;
  padding: 20px 0 0 10px;
  img{
    width: 70px;
    height: 80px;
    border-radius: 5px;
  }
  .title-right{
    flex: 1;
    height: 80px;
    margin-left: 10px;
    font-size: 14px;
    p{
      margin-bottom: 6px;
    }
    .brand{
      background-color: #ef1414;
      padding: 2px 4px;
      text-align: center;
    }
    .reduce{
      padding: 5px 4px;
      background-color: #fff;
      color: #ed7675;
    }
    .num-btn{
      justify-content: space-around;
      align-items: center;
      padding: 4px 10px;
      margin-left: 5px;
      font-size: 14px;
      border-radius: 10px;
      text-align: center;
      background-color: rgba(0, 0, 0, .5);
      span:last-child{
        margin-left: 4px;
        font-size: 15px;
      }
    }
  }
}
.notice-info{
  height: 30px;
  line-height: 30px;
  padding-left: 10px;;
  font-size: 12px;
  background-color: rgba(0, 0, 0, .4);
  .publicity{
    background-color: #fff;
    padding: 2px;
    color: #000;
    margin-right: 5px;
  }
  span:last-child{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.nums{
  align-items: center;
  margin-bottom: 20px;
  .nums-info{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
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
body{
  position: relative;
  margin:  auto;;
}
  .shop-car{
    width: 90%;
    height: 50px;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 5%;
    bottom: 0;
    .car-left{
      width: 100px;
    }
    .car-center{
      flex: 1;
    }
    .car-right{
      width: 100px;
    }
  }
</style>

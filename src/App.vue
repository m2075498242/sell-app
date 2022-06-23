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
      <div class="car-right dpflex">
        <div class="spend dpflex">
          <van-icon
            name="cart-circle"
            :class="getShopList.length ? 'active1' : ''"
            :badge="getShopList.length"
            @click="exhibit()"
          />
          <div class="money">
            <span>￥{{ totlaPrice.toFixed(2) }}</span>
            <p class="spends">另需配送费￥4元 | 支持自取</p>
          </div>
        </div>
        <div class="car-btn" :class="getShopList.length ? 'active' : ''">
          去结算
        </div>
      </div>
    </div>
    <!-- 弹出层 -->
    <van-action-sheet
      v-model="show"
      title="新用户下单立减五元"
      :closeable="false"
    >
      <div class="contents">
        <div class="car dpflex">
          <span>购物车</span>
          <span @click="closeShopCar()"> 清空购物车</span>
        </div>
        <div class="items">
          <div
            class="shops-info dpflex"
            v-for="item in getShopList"
            :key="item.id"
          >
            <p class="info">{{ item.name }}</p>
            <span class="total"
              >￥{{ (item.num * item.price).toFixed(2) }}</span
            >
            <div class="btn dpflex">
              <span class="add" @click="reduce(item)"> - </span>
              <b> {{ item.num }} </b>
              <span class="reduce" @click="add(item)"> + </span>
            </div>
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class App extends Vue {
   active = 0;
   show = false;
   totlaPrice = 0;
   getShopList = [];
   // 显示
  exhibit(){
    if(this.getShopList.length){
      this.show = true;
    }
  }
   add(item:any){
    item.num++
    this.$store.commit('getShopList',item)
  }
  reduce(item:any){
    item.num--;
    this.$store.commit('reduceShopList',item)
  }
  closeShopCar(){
    this.$store.commit('closeShopCar',this.getShopList)
    setTimeout(()=>{
      this.show = false;
    },200)
    
  }
   @Watch("$store.state.shopCarList", { immediate: true, deep: true })
    getCarList(newVal: any) {
    this.getShopList = newVal;
    let sum = 0;
    this.getShopList.forEach((item: any) => {
      let price = item.price * item.num;
      sum += price;
    });
    this.totlaPrice = sum;
  }
}
</script>
<style scoped lang="less">

// 自定义面板
.van-action-sheet__header{
  font-size: 14px;
  background-color: #fde6c8;
  color: red;
}
 .contents {
    padding: 16px 16px 160px;
    div{
      margin-bottom: 15px;
    }
    .car{
      justify-content: space-between;
      align-items: center;
    }
  }
  .shops-info{
    .info{
      width: 150px;
      white-space:nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .total{
      flex: 1;
      color: #e45330;
    }
    .btn{
      width: 120px;
      justify-content: space-around;
      align-items: center;
      span{
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        background-color: #f60;
        border: 1px solid #eee;
      }
       .add{
          background-color: #fff;
        }
        .reduce{
          background-color:#fec215;
        }
    }
  }



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
  .shop-car{
    width: 90%;
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    color: #989898;
    display: flex;
    justify-content: start;
    align-items: center;
    position: fixed;
    z-index: 9999;
    left: 5%;
    bottom: 10px;
    .car-left{
      width: 60px;
      height: 50px;
      margin-right: 5px;
      background-color: #000;
      text-align:center;
      p{
        font-size: 12px;
      }
    }
    .car-right{
      flex: 1;
      align-items: center;
      width: 100px;
      height: 50px;
      background-color: #000;
      .spend{
        flex: 1;
        align-items: center;
        height: 50px;
        .money{
          font-size: 12px;
          margin-left: 10px;
          
           .spends{
        white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
           }
        }
      }
      .car-btn{
        width: 80px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        padding-right: 10px;
        font-size: 14px;
      }
    }
  }
  .van-icon{
    padding-left: 5px;
    font-size: 30px;
  }
  .active1{
    color: #fec215;
  }
  .active{
    color: #000;
    background-color: #fec215;
  }
</style>

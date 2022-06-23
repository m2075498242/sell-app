<template>
  <div class="shops">
    <div class="shops-top">
      <div class="shop-title dpflex">
        <div class="collect-left">
          <h2 class="title">{{ shopInfo.name }}</h2>
          <van-rate
            :size="15"
            v-model="num"
            allow-half
            void-icon="star"
            void-color="#eee"
            color="#ffd21e"
          />
          <span
            ><span>({{ shopInfo.score }})</span>月售<span>{{
              shopInfo.sellCount
            }}</span
            >单</span
          >
        </div>
        <div class="collect-right">
          <span>❤</span>
          <p>已收藏</p>
        </div>
      </div>
      <div class="price dpflex">
        <div>
          <span>起送价</span>
          <p>
            <span>{{ shopInfo.minPrice }}</span
            >元
          </p>
        </div>
        <div>
          <span>商家配送</span>
          <p><span>8</span>元</p>
        </div>
        <div>
          <span>平均配送时间</span>
          <p>
            <span>{{ shopInfo.deliveryTime }}</span
            >分钟
          </p>
        </div>
      </div>
    </div>
    <div class="shops-bottom">
      <h2 class="notice">活动与公告</h2>
      <p class="notice-info">
        {{ shopInfo.bulletin }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import { goods} from "@/api/index.ts"
@Component
export default class Shops extends Vue {
  num = 2;
  shopInfo = {};
  private async created(){
    let res = await goods();
    console.log(res.data.data);
    this.shopInfo = res.data.data;
  }
}
</script>
<style scoped lang="less">
.shops{
  height: 100%;
  background-color: #eee;
}
.shops-top{
  height: 50%;
  margin-bottom: 20px;
  background-color: #fff;
  .shop-title{
    height: 50%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
  }
  .price{
    height: 50%;
    justify-content: space-around;
    align-items: center;
    div{
      text-align: center;
      color: #b3b3b3;
      p{
        margin-top: 8px;
       span{
        font-size: 25px;
         color: #000;
       }
      }
    }
  }
}
.shops-bottom{
  height: 50%;
  padding: 15px;
  overflow-y: scroll;
  background-color: #fff;
  .notice{
    font-size: 18px;
    font-weight: 600;
    color: #0f0f0f;
  }
  .notice-info{
    margin-top: 15px;
  }
}
.collect-left{
  .title{
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: normal;
  } 
}
.shops{
  margin-top: 20px;
}
</style>

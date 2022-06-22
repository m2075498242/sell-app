<template>
  <div class="content-bottom dpflex">
    <div class="content-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item, index) in goodsList"
          :key="index"
          :title="item.name"
          @click="change(index)"
        />
      </van-sidebar>
    </div>
    <div class="content-right flex1">
      <div class="outer">
        <div
          class="item"
          v-for="(item, index) in goodsList"
          :key="index + '1'"
          :id="index"
        >
          <h2 class="title">
            <span>{{ item.name }}</span>
          </h2>
          <van-card
            v-for="item1 in item.foods"
            :key="item1.id"
            :price="item1.price"
            :title="item1.name"
            :thumb="item1.imgUrl"
            :origin-price="item1.price + 10"
          >
            <template #tags>
              <van-tag plain type="danger">特惠</van-tag>
            </template>
            <template #price-top>
              <p>月销{{ item1.sellCount }}份 好评度{{ item1.rating }}%</p>
            </template>
            <template #footer>
              <span @click="item1.num--" v-if="item1.num > 0"> - </span>
              <span> {{ item1.num }} </span>
              <span @click="item1.num++"> + </span>
            </template>
          </van-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Notify } from 'vant';
import { Component, Vue } from "vue-property-decorator";
import {getGoodsList} from '../../api/index'
import BScroll from '@better-scroll/core'
import index from '@/store';
@Component
export default class extends Vue {
  activeKey =  0;
  rightBs:any = '';
  rightArr:any = [];
  // 钩子函数
  private async created(){
    let res = await getGoodsList();
    res.data.goodsList.forEach(( item:any ) =>{
      item.foods.forEach((item1:any) =>{
        item1.num = 0;
      })
    })
    this.$store.commit("getData",res.data.goodsList)
    this.initBs();
    // this.$nextTick()
    this.rightChange();
  }
   // 存放在vuex中  computed
    get goodsList(){
      return this.$store.state.goodsList;
    }
  // 初始化BS
  initBs(){
    // 左边
    let leftBs = new BScroll('.content-left', {
      click: true
    })
    this.rightBs = new BScroll('.content-right', {
      click: true,
       probeType:2 
    })
    // 触发滚动事件
      this.rightBs.on('scroll', (position:any) => {
        // 拿到当前盒子
      let y = Math.abs(position.y)+215;
      // 遍历数组并进行判断
      this.rightArr.forEach((item:any) =>{
        if(y>item.min && y<item.max){
          this.activeKey = item.index;
        }
      })
      // console.log(y)
  })
  }
  // 左侧右侧联动
  change(index:number){
    let dom = document.getElementById( '' + index);
    this.rightBs.scrollToElement( dom , 1000 );
  }
  // 右侧左侧联动
  rightChange(){
    this.$nextTick(()=>{
      let items = document.querySelectorAll(".item");
      items.forEach((item:any,index)=>{
        /**
         * index 当前盒子标记
         * item.offsetTop  距顶部距离
         * item.offsetTop + item.offsetHeight  当前元素的盒子位置
         */
        let obj = {
          index:index,
          min:item.offsetTop,
          max:item.offsetTop + item.offsetHeight
        }
        this.rightArr.push(obj)
      })
      // console.log(this.rightArr);
    })
   
  }
}
</script>
<style scoped lang="less">
  .content-bottom {
    height: 100%;
  }
  .content-left{
    width: 100px;
    height: 100%;
    overflow:hidden;
  }
  .content-right{
    height: 100%;
    overflow:hidden;
    .title{
      span{
        font-size: 14px;
        color: #6e6e6e;
        padding-left: 10px;
      }
      padding: 5px 0;
      border-left: 3px solid #dbdbdb;
      background-color: #f3f3f3;
    }
  .modal{
    text-align: center;
  }
  }
  .van-button--primary{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0)
  }
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>

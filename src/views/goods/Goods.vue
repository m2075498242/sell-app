<template>
  <div class="content-bottom dpflex">
    <div class="content-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item, index) in arrList"
          :key="index"
          :title="item"
        />
      </van-sidebar>
    </div>
    <div class="content-right flex1">
      <div class="item">
        <h2 class="title"><span>迷你早餐</span></h2>
        <van-card
          price="2.00"
          title="荤素双人套裁(配米饭两份+饮料品两份)"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          origin-price="10"
        >
          <template #tags>
            <van-tag plain type="danger">特惠</van-tag>
          </template>
          <template #price-top>
            <p>月销69份 好评度100%</p>
          </template>
          <template #footer>
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              disable-input
              min="0"
              :show-minus="value > 0 ? true : false"
              @change="onChange"
            />
          </template>
        </van-card>
      </div>
      <!-- 遮罩层 -->
      <van-button
        z-index="100"
        type="primary"
        text="显示遮罩层"
        @click="show = true"
      />
      <van-overlay :show="show" @click="show = false" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Notify } from 'vant';
import { Component, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
  activeKey =  0;
  value = 0;
  show = false; 
  // 侧边栏数据
  arrList:Array<string> = [
    '迷你早餐',
    '冒菜套餐自选区',
    '撸烤串',
    '满减专区',
    '营养适配',
    '千万销量',
    '炒饭系列',
    '冒菜套餐自选区',
    '冒菜套餐自选区',
  ]
  // 方法
  onChange(value:number){
    this.value = value;
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
    overflow-y: scroll;
  }
  .content-right{
    height: 100%;
    overflow-y: scroll;
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
  /deep/.van-sidebar{
    height: 100%;
    overflow-y: scroll;
  }
    // 遮罩层按钮
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

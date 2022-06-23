import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodsList: [],
    // 购物车列表
    shopCarList: [],
  },
  getters: {},
  mutations: {
    getData(state, data): void {
      state.goodsList = JSON.parse(JSON.stringify(data));
    },
    // 购物车列表
    /**
     *在商品列表中判断是否有该商品，如果该商品存在，
     将拿过来的num值赋值给shopCarList数组
     */
    getShopList(state: any, data: any): void {
      let findIndex = -1;
      // 遍历数组 判断该对象是否存在 如果存在 findIndex = 该对象的索引
      state.shopCarList.forEach((item: any, index: number) => {
        if (item.id == data.id) {
          findIndex = index;
        }
      });
      console.log(state.shopCarList);
      // 等于-1 不存在
      if (findIndex == -1) {
        state.shopCarList.push(data);
      } else {
        state.shopCarList[findIndex].num = data.num;
      }
    },
    reduceShopList(state: any, data: any): void {
      // 如果传过来的数据中的num已经为0  则进行处理
      // eslint-disable-next-line prefer-const
      let index = state.shopCarList.findIndex((item: any) => {
        return item.id == data.id;
      });
      if (data.num == 0) {
        state.shopCarList.splice(index, 1);
      }
      console.log(data);
    },
    closeShopCar(state: any, data: any): void {
      state.shopCarList.splice(0);
    },
  },
  actions: {},
  modules: {},
});

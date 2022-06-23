import request from "../utils/request";
// 暴露
export const getGoodsList = () => {
  return request({
    method: "get",
    url: "/goods/goods_list",
  });
};
// 评价
export const evaluate = () => {
  return request({
    method: "get",
    url: "/shop/ratings",
  });
};
// 商家/shop/seller
export const goods = () => {
  return request({
    method: "get",
    url: "/shop/seller",
  });
};

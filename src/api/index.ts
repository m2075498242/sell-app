import request from "../utils/request";
// 暴露
export const getGoodsList = () => {
  return request({
    method: "get",
    url: "/goods/goods_list",
  });
};

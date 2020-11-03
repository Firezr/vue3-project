import axios from '.'

// 获取轮播图的接口
// 利用泛型，在调用时 定义返回数据的类型
export function getSliders<T>() {
  return axios.get<T, T>('/slider/list')
}


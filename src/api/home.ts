import { CATEGORY_TYPES } from '@/typings/home'
import axios from '.'

// 获取轮播图的接口
// 利用泛型，在调用时 定义返回数据的类型
export function getSliders<T>() {
  return axios.get<T, T>('/slider/list')
}


export function getLessons<T>(category: CATEGORY_TYPES = 0, offset: number = 0, limit: number = 5) {
  return axios.get<T, T>(`/lesson/list?category=${category}&offset=${offset}&limit=${limit}`)
}
import { CATEGORY_TYPES, IHomeState } from '@/typings/home'
import { Module } from 'vuex'
import { IGlobalState } from '../index'


// 首页里的数据
const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessions: {
    hasMore: true,  // 是否有更多
    loading: false, //默认没有在加载
    offset: 0,
    limit: 5,
    list: [] //先前已经显示到页面的课程有哪些
  }
}

// state.lessions.list[0].category

// Module里的参数  1.自己状态  2.全局状态
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    aa(state) {
      
    }
  }
}

export default home
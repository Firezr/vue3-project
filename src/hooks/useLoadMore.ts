import { IGlobalState } from '@/store'
import { Ref, onMounted, computed } from 'vue'
import { Store } from 'vuex'
import _ from 'lodash'


export const useLoadMore = (refreshElm: Ref<null | HTMLElement>, store: Store<IGlobalState>, type: string) => {
  // 防抖
  let ele:HTMLElement
  let _loadMore = ()=>{
    // 获取可视区域高度 卷去的高度 整个高度
    let containerH = ele.clientHeight
    let scrollT = ele.scrollTop
    let scrollH = ele.scrollHeight
    if(containerH + scrollT + 20 >= scrollH) { //距整个高度还有20 开始加载
      store.dispatch(type)
    }
  }
  onMounted(()=>{
    ele = refreshElm.value as HTMLElement
    ele.addEventListener('scroll', _.debounce(_loadMore, 200))
  })
  
  const isLoading = computed(()=>store.state.home.lessions.loading)
  const hasMore = computed(()=>store.state.home.lessions.hasMore)
  return {
    isLoading,
    hasMore
  }
}
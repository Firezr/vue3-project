<template>
  <div>
    <van-swipe v-if="sliderList.length" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in sliderList" :key="item.id">
        <img :src="item.url" alt="" style="max-width:100%;">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import * as Types from '@/store/action-types'

export default defineComponent({
  // 默认不能给 setup 加 async
  async setup(props, context) {
    // 页面一加载就获取数据
    let store = useStore<IGlobalState>()

    let sliderList = computed(()=> store.state.home.sliders)
    if(sliderList.value.length === 0) { // 缓存 如果没数据则获取
      await store.dispatch(`home/${Types.SET_SLIDER_LIST}`)
    }
    console.log(sliderList);
    

    return {
      sliderList
    }
  },
});
</script>

<style lang='scss'>
.my-swipe .van-swipe-item {
  img {
    height: 100px;   
  }
}
</style>
<template>
  <div class="home">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <Swipper></Swipper>
    <!-- 课程列表 -->
    <List></List>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";  // 推断类型，代码提示
import Header from "./header.vue";
import Swipper from "./swipper.vue";
import List from "./list.vue";
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
export default defineComponent({
  components: {
    Header,
    Swipper,
    List,
  },
  setup(props, context) {
    let store = useStore<IGlobalState>()
    
  }
});
</script>
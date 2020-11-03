<template>
  <div class="home">
    <!-- 头部 -->
    <Header
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></Header>

    <div class="container">
      <!-- 轮播图 -->
      <Suspense>
        <template #default>
          <Swipper></Swipper>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>

      <!-- 课程列表 -->
      <List></List>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"; // 推断类型，代码提示
import Header from "./header.vue";
import Swipper from "./swipper.vue";
import List from "./list.vue";
import { useStore, Store } from "vuex";
import { IGlobalState } from "@/store";
import { CATEGORY_TYPES } from "@/typings/home";
import * as Types from "@/store/action-types";

// 专门为修改分类使用的 options api
function useCategory(store: Store<IGlobalState>) {
  let category = computed(() => store.state.home.currentCategory); // vuex中状态
  let setCurrentCategory = (category: CATEGORY_TYPES) => {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  };
  return {
    category,
    setCurrentCategory,
  };
}
export default defineComponent({
  components: {
    Header,
    Swipper,
    List,
  },
  setup(props, context) {
    // 1.获取vuex的分类状态，且可以更改状态
    let store = useStore<IGlobalState>();
    let { category, setCurrentCategory } = useCategory(store);

    return {
      category,
      setCurrentCategory,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  margin-top: 65px;
}
</style>
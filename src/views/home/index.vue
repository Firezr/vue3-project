<template>
  <div class="home">
    <!-- 头部 -->
    <Header
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></Header>

    <div class="container" ref="refreshElm">
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
      <List :lessonList="lessonList" @setLessonList="setLessonList"></List>
      <div v-if="isLoading">loading...</div>
      <div v-if="!hasMore">end line...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue"; // 推断类型，代码提示
import Header from "./header.vue";
import Swipper from "./swipper.vue";
import List from "./list.vue";
import { useStore, Store } from "vuex";
import { IGlobalState } from "@/store";
import { CATEGORY_TYPES } from "@/typings/home";
import { useLoadMore } from '@/hooks/useLoadMore'
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

function useLessonList(store: Store<IGlobalState>) {
  const lessonList = computed(() => store.state.home.lessions.list); // vuex中状态
  const setLessonList = () => {
    store.dispatch(`home/${Types.SET_LESSON_LIST}`);
  };
  onMounted(() => {
    if (lessonList.value.length === 0) {
      setLessonList();
    }
  });
  return {
    lessonList,
    setLessonList,
  };
}
export default defineComponent({
  components: {
    Header,
    Swipper,
    List,
  },
  setup(props, context) {
    let store = useStore<IGlobalState>();
    // 1.获取vuex的分类状态，且可以更改状态
    let { category, setCurrentCategory } = useCategory(store);
    // 课程获取
    let { lessonList, setLessonList } = useLessonList(store);

    // 获取真实dom
    const refreshElm = ref<null | HTMLElement>(null);
    const {isLoading, hasMore} = useLoadMore(refreshElm, store, `home/${Types.SET_LESSON_LIST}`)
    return {
      category,
      lessonList,
      setCurrentCategory,
      setLessonList,
      refreshElm,
      isLoading,
      hasMore
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  margin-top: 65px;
  position: absolute;
  top: 65px;
  bottom: 50px;
  width: 100%;
  overflow-y: scroll;
}
</style>
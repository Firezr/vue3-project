<template>
  <div class="header">
    <img src="@/assets/logo.png" />
    <van-dropdown-menu class="menu">
      <van-dropdown-item
        :modelValue="category"
        :options="options"
        @change="change"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang='ts'>
import { CATEGORY_TYPES } from "@/typings/home";
import { defineComponent, PropType, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATEGORY_TYPES>,
    },
  },
  emits: ["setCurrentCategory"], // 为了代码提示
  setup(props, context) {
    const state = reactive({
      options: [
        { text: "全部", value: CATEGORY_TYPES.ALL },
        { text: "react", value: CATEGORY_TYPES.REACT },
        { text: "vue", value: CATEGORY_TYPES.VUE },
      ],
    });
    const change = (value: CATEGORY_TYPES) => {
      context.emit("setCurrentCategory", value);
    };

    return {
      ...toRefs(state),
      change,
    };
  },
});
</script>

<style lang='scss'>
.header {
  height: 65px;
  background: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .menu, img {
    height: 50px;
  }
  .van-dropdown-menu__item {
    background-color: #2a2a2a;
  }
  .van-dropdown-menu__title {
    color: #ffffff;
  }
}
</style>
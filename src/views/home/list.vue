<template>
  <div>
    <van-card
      v-for="item in lessonList"
      :key="item.id"
      :price="item.price"
      :title="item.title"
      :thumb="item.poster"
    >
      <template #tags>
        <van-tag plain type="danger">
          {{ formatCategory(item.category) }}
        </van-tag>
      </template>
    </van-card>
  </div>
</template>

<script lang='ts'>
import { ILession } from "@/typings/home";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    lessonList: {
      type: Array as PropType<ILession[]>,
    },
  },
  setup(props, ctx) {
    let formatCategory = (type: number) => {
      switch (type) {
        case 1:
          return "react";
          break;
        case 2:
          return "vue";
          break;
        default:
          break;
      }
    };
    return {
      formatCategory,
    };
  },
});
</script>
<style>
</style>
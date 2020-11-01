<template>
<a-list item-layout="horizontal" :data-source="planList">
  <template v-slot:renderItem="{ item, index }">
    <a-list-item>
      <a-list-item-meta :description="item.time">
        <template v-slot:title>
          <a>{{ formatData(item.date) }}</a>
        </template>
        <template v-slot:avatar>
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </template>
      </a-list-item-meta>
    </a-list-item>
  </template>
</a-list>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  computed,
  watchEffect
} from "vue";
import moment from "moment";
import {
  useStore
} from "vuex";
import * as types from "../../store/action-types";
export default {
  setup(props, context) {
    const store = useStore();
    // const state = reactive({
    //   planList: store.state.planList,  // planList是取的store里的默认值
    // });
    onMounted(() => {
      store.dispatch(types.SET_PLAN_LIST);
    });

    const formatData = (val) => {
      return moment(val).format('YYYY-MM-DD')
    }
    return {
      ...toRefs(store.state)
    };
  },
};
</script>

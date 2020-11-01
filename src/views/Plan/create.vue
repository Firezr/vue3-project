<template>
<a-form :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
  <a-form-item label="Pick a date">
    <a-date-picker v-model:value="form.date" type="date" placeholder="Pick a date" style="width: 100%" />
  </a-form-item>

  <a-form-item label='请选择耗时'>
    <a-input-number :min="1" :max="10" v-model:value="form.time" />
  </a-form-item>

  <a-form-item label='请输入待办事项:'>
    <a-textarea v-model:value="form.content" placeholder="请输入待办事项" allow-clear />
  </a-form-item>

  <a-form-item>
    <a-button type='primary' @click="onSubmit">创建任务</a-button>
  </a-form-item>
</a-form>
</template>

<script>
import {
  reactive,
  toRefs
} from "vue";
import moment from "moment";
export default {
  setup(props, context) {
    const state = reactive({
      form: {
        date: moment(Date.now()).format("YYYY-MM-DD"),
        time: 0,
        content: ''
      },
    });

    const onSubmit = () => {
      context.emit('handlePlan', state.form)
    }
    return {
      ...toRefs(state),
      onSubmit
    };
  },
};
</script>

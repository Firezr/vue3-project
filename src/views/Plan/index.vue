<template>
<Create @handlePlan='handlePlan'></Create>
</template>

<script>
import Create from "./create.vue";
export default {
  components: {
    Create
  },
  setup() { // this指向不明确的问题 不方便推断 对ts支持不好
    const handlePlan = (plan) => {
      console.log(plan)
    }

    return {
      handlePlan
    }
  }
}
</script>

<style>

</style>

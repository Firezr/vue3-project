declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明文件
// import 'a.vue'  引入.vue文件就知道类型是组件类型
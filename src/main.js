import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Vue3都是函数
const app = createApp(App)
app.config.productionTip = false;
app.use(Antd);
app.use(store)
app.use(router)
app.mount('#app')

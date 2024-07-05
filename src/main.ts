import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
import router from "./routes";

createApp(App).use(DatePicker)
    .use(router)
    .mount('#app')

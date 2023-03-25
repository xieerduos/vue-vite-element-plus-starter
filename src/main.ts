import 'normalize.css/normalize.css'; // 引入 normalize.css
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import '@/composables';
// import '@/composables';
import App from './App.vue';
import router from './router';
import './styles/index.scss';

import './assets/main.css';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

const app = createApp(App);

// app.use(ElementPlus);

app.use(createPinia());
app.use(router);

app.mount('#app');

import { createApp } from 'vue'
import router from './router/intercept'
import 'lib-flexible/flexible'//postcss-pxtorem
import 'amfe-flexible'
import App from './App.vue'
import store from './store'
const app = createApp(App)
app.use(router).use(store).mount('#app');

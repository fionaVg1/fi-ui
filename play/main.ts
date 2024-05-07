import { createApp } from 'vue'
import App from './app.vue'
import FiIcon from '@fi-ui/components/icon'
import '@fi-ui/theme-chalk/src/index.scss'
const app = createApp(App)
app.use(FiIcon)
app.mount('#app')

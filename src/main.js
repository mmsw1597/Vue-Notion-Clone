import { createApp } from 'vue'
import App from '~/App'
import router from '~/routes'
import store from '~/store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
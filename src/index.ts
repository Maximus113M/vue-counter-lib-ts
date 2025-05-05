import Counter from './Counter.vue'
import { App } from 'vue'

export default {
  install(app: App) {
    app.component('Counter', Counter)
  }
}

export { Counter }
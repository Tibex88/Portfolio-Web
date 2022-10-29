import {
    createApp
} from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('focus', {
    mounted(el) { // When the bound element is inserted into the DOM...
        el.focus() // Focus the element
    }
})
app.mount('#app')
import { createApp, h } from 'vue'
import { TestComp } from './lib'

createApp({
    setup() {
        return () => h(TestComp)
    }
}).mount('#app')

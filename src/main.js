import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import "/node_modules/primeflex/primeflex.css"
import 'primeicons/primeicons.css'
import Router from "@/router/index.js";

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(Router)
    .mount('#app')

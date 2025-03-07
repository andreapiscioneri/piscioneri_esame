import { createApp } from 'vue'
import App from './App.vue'
import './style.css'; // Importa Tailwind CSS
import router from './router' 

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createApp(App)
.use(router)
.mount('#app')

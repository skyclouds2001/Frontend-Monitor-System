import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router';
import store from '@/store';
import VueAxios from 'vue-axios';
import axios from 'axios';

createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app');

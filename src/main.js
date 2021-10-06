import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhone);

const app = createApp(App).use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
app.use(VueAxios, axios);
app.use(store);
app.provide('axios', app.config.globalProperties.axios);

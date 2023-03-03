import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router.js';
import store from './store/index.js';
import Navigation from './components/layout/NavigationBar.vue';
import firebaseConfig from './firebase';
import { initializeApp } from 'firebase/app';

loadFonts();
const app = createApp(App);
app.component('navigation-bar', Navigation);

initializeApp(firebaseConfig);

app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');

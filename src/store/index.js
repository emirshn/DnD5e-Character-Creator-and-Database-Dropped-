import { createStore } from 'vuex';

import characterModule from './character/index.js';
import infoModule from './information/index.js';
const store = createStore({
  modules: {
    character: characterModule,
    information: infoModule,
  },
});

export default store;

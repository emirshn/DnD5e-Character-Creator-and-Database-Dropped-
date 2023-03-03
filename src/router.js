import { createWebHistory, createRouter } from 'vue-router';

import AllCharacters from './pages/AllCharacters.vue';
import CharacterCreation from './pages/CharacterCreation.vue';
import CharacterDetail from './pages/CharacterDetails.vue';
import Bestiary from './pages/Bestiary.vue';

const routes = [
  { path: '/', redirect: '/character-creation' },
  { path: '/character-creation', component: CharacterCreation },
  { path: '/all-characters', component: AllCharacters },
  { path: '/all-characters/:id', component: CharacterDetail, props: true },
  { path: '/bestiary', component: Bestiary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

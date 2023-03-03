<template>
  <div class="center">
    <v-card>
      <v-list>
        <v-list-item class="py-5" v-for="monster in bestiary.results">
          <v-btn class="pb-12" @click="loadMonster(monster.url)">
            <h2 class="font-italic text-h6 pa-2 ma-2">{{ monster.name }}</h2>
          </v-btn>
          <v-sheet v-if="selectedMonster">
            <img :src="image" />
          </v-sheet>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bestiary: [],
      selectedMonster: {},
      image: '',
    };
  },
  methods: {
    async loadMonster(e) {
      let response = await fetch(`https://www.dnd5eapi.co${e}`);
      let responseData = await response.json();
      this.selectedMonster = responseData;
      console.log(this.selectedMonster);
      this.image = `https://www.dnd5eapi.co${this.selectedMonster.image}`;
    },
    async load() {
      const response = await fetch(`https://www.dnd5eapi.co/api/monsters/`);
      const responseData = await response.json();
      this.bestiary = responseData;
    },
  },
  created() {
    this.load();
  },
};
</script>
<style scoped>
.center {
  margin: auto;
  width: 60%;
  border: 5px solid rgb(63, 8, 99);
  padding: 10px;
}
</style>

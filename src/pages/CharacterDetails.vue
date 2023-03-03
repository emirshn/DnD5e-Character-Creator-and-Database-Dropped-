<template>
  <div class="center">
    <div>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-list-item>
              <img
                :src="selectedCharacter.image"
                class="img-fluid"
                height="300"
                weight="300"
              />
            </v-list-item>
          </v-col>
          <v-divider class="ms-3" inset vertical></v-divider>
          <v-row class="">
            <v-col cols="15">
              <h2 class="font-italic text-h4 pa-2 ma-2">
                {{ selectedCharacter.name }}
              </h2>
              <v-divider class="ms-3" inset></v-divider>
              <v-row>
                <v-col cols="4">
                  <h2 class="font-italic text-h6 pa-2 ma-2 pl-10">
                    {{ selectedCharacter.gender }}
                  </h2>
                </v-col>
                <v-divider class="ms-4" inset vertical></v-divider>
                <v-col cols="6">
                  <h2 class="font-italic text-h6 pa-2 ma-2 pl-10">
                    {{ selectedCharacter.background.name }}
                  </h2>
                </v-col>
              </v-row>
              <v-divider class="ms-3" inset></v-divider>
              <v-row no-gutters class="">
                <v-divider class="ms-3" inset></v-divider>
                <v-col cols="4">
                  <h2 class="font-italic text-subtitle-1 pa-2 ma-2">
                    {{ selectedCharacter.race.name }}
                  </h2>
                </v-col>
                <v-divider class="ms-4" inset vertical></v-divider>
                <v-col cols="6">
                  <h2 class="font-italic text-subtitle-1 pa-2 ma-2">
                    {{ selectedCharacter.subrace.name }}
                  </h2>
                </v-col>
                <v-divider class="ms-3" inset></v-divider>
              </v-row>
              <v-row no-gutters class="">
                <v-divider class="ms-3" inset></v-divider>

                <v-col cols="4">
                  <h2 class="font-italic text-subtitle-1 pa-2 ma-2">
                    {{ selectedCharacter.charclass.name }}
                  </h2>
                </v-col>
                <v-divider class="ms-4" inset vertical></v-divider>
                <v-col cols="6">
                  <h2 class="font-italic text-subtitle-1 pa-2 ma-2">
                    {{ selectedCharacter.subclass.name }}
                  </h2>
                </v-col>
                <v-divider class="ms-3" inset></v-divider>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
        <v-divider class="ms-3" inset></v-divider>
        <h2 class="font-italic text-h4 pa-2 ma-2">Personality</h2>
        <v-btn class="" @click="editShowPersona">Show Persona</v-btn>
        <div class="pt-1" v-if="showPersona">
          <v-list lines="one">
            <v-list-item
              v-for="item in selectedCharacter.personality"
              :key="item"
              :title="item"
              subtitle="..."
            ></v-list-item>
          </v-list>
          <v-divider class="ms-3" inset></v-divider>
        </div>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="pt-1" no-gutters>
          <v-col cols="2" class="px-3">
            <v-img height="100px" width="150px" :src="d20logo.sample">
              <h4 class="pt-11">{{ selectedCharacter.stats.str }}</h4></v-img
            >
            <h2 class="text-subtitle-1">Strength</h2>
          </v-col>
          <v-col cols="2" class="px-3">
            <v-img height="100px" width="150px" :src="d20logo.sample">
              <h4 class="pt-11">{{ selectedCharacter.stats.dex }}</h4></v-img
            >
            <h2 class="text-subtitle-1">Dexterity</h2>
          </v-col>
          <v-col cols="2" class="px-3">
            <v-img height="100px" width="150px" :src="d20logo.sample">
              <h4 class="pt-11">{{ selectedCharacter.stats.con }}</h4></v-img
            >
            <h2 class="text-subtitle-1">Constitution</h2>
          </v-col>
          <v-col cols="2" class="px-3">
            <v-img height="100px" width="150px" :src="d20logo.sample">
              <h4 class="pt-11">{{ selectedCharacter.stats.int }}</h4></v-img
            >
            <h2 class="text-subtitle-1">Intelligence</h2>
          </v-col>
          <v-col cols="2" class="px-3">
            <v-img height="100px" width="150px" :src="d20logo.sample">
              <h4 class="pt-11">{{ selectedCharacter.stats.wis }}</h4></v-img
            >
            <h2 class="text-subtitle-1">Wisdom</h2>
          </v-col>
          <v-col cols="2" class="px-3">
            <v-img height="100px" width="150px" :src="d20logo.sample">
              <h4 class="pt-11">{{ selectedCharacter.stats.cha }}</h4></v-img
            >
            <h2 class="text-subtitle-1">Charisma</h2>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-divider></v-divider>
    <div>
      <h2 class="font-italic text-h4 pa-2 ma-2">Your Abilities</h2>
      <v-list v-for="levelItem in classDetails">
        <h2 class="font-italic text-h5 pa-2 ma-2">
          Level {{ levelItem.level }} - {{ levelItem.rData.class.name }}
        </h2>
        <v-list-item v-for="levelInfo in levelItem.rData.features">
          {{ levelInfo.name }}
        </v-list-item>
      </v-list>
      <h2 class="font-italic text-h4 pa-2 ma-2">Spells</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classDetails: [],
      d20logo: {
        sample: require('../assets/d20.png'),
      },
      selectedCharacter: {},
      showPersona: true,
    };
  },
  props: ['id'],
  methods: {
    editShowPersona() {
      this.showPersona = !this.showPersona;
    },
    async load() {
      for (const item of this.selectedCharacter.levels) {
        let response = await fetch(
          `https://www.dnd5eapi.co${item.class.url}/levels/${item.level}`
        );
        let rData = await response.json();
        this.classDetails.push({ level: item.level, rData });
        console.log(item);
      }
      console.log(this.classDetails);
    },
  },
  created() {
    const characters = this.$store.getters['character/characters'];
    this.selectedCharacter = characters.find(
      (character) => character.id === this.id
    );
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

<template>
  <div class="center">
    <v-row>
      <v-col cols="20" sm="5" md="6" v-for="char in characters" :key="char.id" class="">
        <character-item  
          :id="char.id"
          :name="char.name"
          :image="char.image"
          :race="char.race"
          :subrace="char.subrace"
          :charclass="char.charclass"
          :subclass="char.subclass"
          :gender="char.gender"
          :background="char.background"
          :personality="char.personality"
          :stats="char.stats"
        ></character-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CharacterItem from '../components/CharacterItem.vue';
export default {
  components: {
    CharacterItem,
  },
  data() {
    return {
      characters: [],
    };
  },
  created() {
    this.loadCharacters();
  },
  methods: {
    async loadCharacters() {
      await this.$store.dispatch('character/loadCharacters',);
      this.characters = this.$store.getters['character/characters'];
    },
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

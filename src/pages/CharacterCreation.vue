<template>
  <div class="center">
    <div>
      <h2 class="font-italic text-h4 pa-2 ma-2">Character Creation</h2>
      <v-container grid-list-md text-xs-center>
        <v-row no-gutters>
          <v-col cols="2">
            <v-sheet class="pt-6"> Name: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-">
              <v-text-field v-model="characterName" label="Name"></v-text-field>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pt-6"> Image: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-">
              <v-file-input
                accept="image/*"
                label="Image"
                prepend-icon="mdi-camera"
                v-model="testImage"
                @change="addImage"
              ></v-file-input>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="2">
            <v-sheet class="pt-6"> Race: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2">
              <v-select
                v-model="selectedRace"
                label="Race:"
                :items="races.results"
                item-title="name"
                item-value="index"
                item-text="name"
                return-object
              ></v-select>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pt-6"> Subrace: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2">
              <v-select
                v-model="selectedSubrace"
                label="Subrace:"
                :items="subraces.results"
                item-title="name"
                item-value="index"
                item-text="name"
                return-object
              ></v-select>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="2">
            <v-sheet class="pt-6"> Class: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-">
              <v-select
                v-model="selectedClass"
                label="Class:"
                :items="classes.results"
                item-title="name"
                item-value="index"
                item-text="name"
                return-object
              ></v-select>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pt-6"> Subclass: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2">
              <v-select
                v-model="selectedSubclass"
                label="Subclass:"
                :items="subclasses.results"
                item-title="name"
                item-value="index"
                item-text="name"
                return-object
              ></v-select>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="2">
            <v-sheet class="pt-6"> Gender: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2">
              <v-select
                v-model="gender"
                label="Gender:"
                :items="['Male', 'Female', 'Undefined']"
              ></v-select>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pt-6"> Background: </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-">
              <v-select
                v-model="selectedBackground"
                label="Background:"
                :items="backgrounds.results"
                item-title="name"
                item-value="index"
                item-text="name"
                return-object
              ></v-select>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="pt-6"> Personality Traits #1: </v-sheet>
          </v-col>
          <v-col cols="8">
            <v-sheet class="pa-2 ma-">
              <v-textarea
                v-model="personalityTrait1"
                clearable
                label=""
                rows="1"
              ></v-textarea>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="pt-6"> Personality Traits #2: </v-sheet>
          </v-col>
          <v-col cols="8">
            <v-sheet class="pa-2 ma-">
              <v-textarea
                v-model="personalityTrait2"
                clearable
                label=""
                rows="1"
              ></v-textarea>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="pt-6"> Ideal: </v-sheet>
          </v-col>
          <v-col cols="8">
            <v-sheet class="pa-2 ma-">
              <v-textarea
                v-model="ideal"
                clearable
                label=""
                rows="1"
              ></v-textarea>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="pt-6"> Bond: </v-sheet>
          </v-col>
          <v-col cols="8">
            <v-sheet class="pa-2 ma-">
              <v-textarea
                v-model="bond"
                clearable
                label=""
                rows="1"
              ></v-textarea>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="pt-6"> Flaw: </v-sheet>
          </v-col>
          <v-col cols="8">
            <v-sheet class="pa-2 ma-">
              <v-textarea
                v-model="flaw"
                clearable
                label=""
                rows="1"
              ></v-textarea>
            </v-sheet>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <!--Race-->
        <v-card v-if="selectedRace.name !== 'Pick one'">
          <h2 class="font-italic text-h4 pa-2 ma-2">Race Description</h2>
          <v-row class="pt-1" no-gutters>
            <v-col col="5">
              <p>{{ selectedRaceDetails.name }}</p>
              <p>{{ selectedRaceDetails.age }}</p>
              <p>{{ selectedRaceDetails.alignmment }}</p>
              <p>{{ selectedRaceDetails.language_desc }}</p>
              <p>Speed: {{ selectedRaceDetails.speed }}</p>
              <h3 class="font-italic text-h4 pa-2 ma-2">Known Languages</h3>
              <v-list-item v-for="lang in selectedRaceDetails.languages">{{
                lang.name
              }}</v-list-item>
              <h3 class="font-italic text-h4 pa-2 ma-2">Traits</h3>
              <v-list-item v-for="trait in selectedRaceDetails.traits">{{
                trait.name
              }}</v-list-item>
            </v-col>
          </v-row>

          <v-row no-gutters v-if="selectedRaceDetails.language_options">
            <v-col cols="5">
              <v-sheet class="pa-2 ma-">
                <v-select
                  :style="{ transform: 'translateX(75%)' }"
                  v-model="newLanguage"
                  label="Select a Language:"
                  :items="selectedRaceDetails.language_options.from.options"
                  item-title="item.name"
                  item-value="item.index"
                  item-text="item.name"
                  return-object
                  variant="solo"
                ></v-select>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
        <v-divider></v-divider>

        <!--Class-->
        <v-card
          v-if="
            selectedClassDetail.name !== '' &&
            selectedClassDetail.proficiency_choices
          "
        >
          <h2 class="font-italic text-h4 pa-2 ma-2">Class Description</h2>
          <h2 class="font-italic text-h5 pa-2 ma-2">
            {{ selectedClassDetail.name }}
          </h2>
          <v-row class="pt-1" no-gutters>
            <v-col col="5">
              <p>Hit Die: {{ selectedClassDetail.hit_die }}</p>
              <h3 class="font-italic text-h4 pa-2 ma-2">Proficiencies</h3>
              <v-list-item v-for="prof in selectedClassDetail.proficiencies">{{
                prof.name
              }}</v-list-item>
              <v-sheet class="pa-2 ma-">
                <h4 class="font-italic text-h6 pa-2 ma-2">
                  {{ selectedClassDetail.proficiency_choices[0].desc }}
                </h4>
                <v-select
                  :style="{ transform: 'translateX(0%)' }"
                  v-model="newProficiencies"
                  label="Select Proficiencies:"
                  :items="
                    selectedClassDetail.proficiency_choices[0].from.options
                  "
                  item-title="item.name"
                  item-value="item.index"
                  item-text="item.name"
                  multiple
                  return-object
                  variant="solo"
                ></v-select>
              </v-sheet>

              <div v-if="selectedClassDetail.proficiency_choices[1]">
                <v-sheet
                  class="pa-2 ma-"
                  v-if="
                    selectedClassDetail.proficiency_choices[1].from.options[0]
                      .item
                  "
                >
                  <h4 class="font-italic text-h6 pa-2 ma-2">
                    {{ selectedClassDetail.proficiency_choices[1].desc }}
                  </h4>
                  <v-select
                    :selectable="
                      () =>
                        selected.length <
                        selectedClassDetail.proficiency_choices[1].choose
                    "
                    :style="{ transform: 'translateX(0%)' }"
                    v-model="instrumentsProficiencies"
                    label="Select Proficiencies:"
                    :items="
                      selectedClassDetail.proficiency_choices[1].from.options
                    "
                    item-title="item.name"
                    item-value="item.index"
                    item-text="item.name"
                    multiple
                    return-object
                    variant="solo"
                  ></v-select>
                </v-sheet>
              </div>
              <div>
                <h3 class="font-italic text-h4 pa-2 ma-2">Class Features</h3>
                <v-sheet>
                  <v-list-item v-for="feature in classDetails.features">
                    {{ feature.name }}
                  </v-list-item>
                </v-sheet>
                <div></div>
              </div>

              <div v-if="selectedSubclass.name !== 'No subclass'">
                <h3 class="font-italic text-h4 pa-2 ma-2">Subclass Features</h3>
                <v-sheet>
                  <v-list-item v-for="feature in subClassDetails.features">
                    {{ feature.name }}
                  </v-list-item>
                </v-sheet>
                <div></div>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <v-divider></v-divider>

        <!--Abilities-->
        <div>
          <h2 class="font-italic text-h4 pa-2 ma-2">Ability Scores</h2>
          <h2 class="font-italic text-h5 pa-2 ma-2">Recommend Points</h2>
          <h2 class="font-italic text-h6 pa-2 ma-2">
            Your race bonuses added to default values.
          </h2>
          <!-- BUGLI -->
          <div v-if="selectedRaceDetails.ability_bonus_options">
            <h2 class="font-italic text-h6 pa-2 ma-2">
              Add 2 points to 1 stat or 1 point to 2 stats. This option comes
              from your Traits (bUGLI).
            </h2>
            <h2 class="font-italic text-h5 pa-2 ma-2">
              {{
                raceBonusStats.str +
                raceBonusStats.dex +
                raceBonusStats.con +
                raceBonusStats.wis +
                raceBonusStats.int +
                raceBonusStats.cha
              }}/2
            </h2>
          </div>
          <v-row
            class="pt-1"
            no-gutters
            v-if="selectedRaceDetails.ability_bonus_options"
          >
            <v-col
              v-for="bonus in selectedRaceDetails.ability_bonus_options.from
                .options"
              cols="2"
              class="px-3"
            >
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                :ref="bonus.ability_score.name"
                min="0"
                max="2"
                v-model.number="raceBonusStats[bonus.ability_score.index]"
              ></v-text-field>
              <h2 class="text-subtitle-1">{{ bonus.ability_score.name }}</h2>
            </v-col>
          </v-row>
          <h2 class="font-italic text-h5 pa-2 ma-2">
            {{
              characterStats.str +
              characterStats.dex +
              characterStats.con +
              characterStats.wis +
              characterStats.int +
              characterStats.cha -
              8 * 6 -
              bonusStats.str -
              bonusStats.dex -
              bonusStats.con -
              bonusStats.wis -
              bonusStats.int -
              bonusStats.cha
            }}/27
          </h2>
          <v-row class="pt-1" no-gutters>
            <v-col cols="2" class="px-3">
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                min="0"
                ref="str"
                :rules="[statRules]"
                v-model.number="characterStats.str"
              ></v-text-field>
              <h2 class="text-subtitle-1">Strength</h2>
            </v-col>
            <v-col cols="2" class="px-3">
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                min="0"
                ref="str"
                :rules="[statRules]"
                v-model.number="characterStats.dex"
              ></v-text-field>
              <h2 class="text-subtitle-1">Dexterity</h2>
            </v-col>
            <v-col cols="2" class="px-3">
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                min="0"
                ref="str"
                :rules="[statRules]"
                v-model.number="characterStats.con"
              ></v-text-field>
              <h2 class="text-subtitle-1">Constitution</h2>
            </v-col>
            <v-col cols="2" class="px-3">
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                min="0"
                ref="str"
                :rules="[statRules]"
                v-model.number="characterStats.int"
              ></v-text-field>
              <h2 class="text-subtitle-1">Intelligence</h2>
            </v-col>
            <v-col cols="2" class="px-3">
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                min="0"
                ref="str"
                :rules="[statRules]"
                v-model.number="characterStats.wis"
              ></v-text-field>
              <h2 class="text-subtitle-1">Wisdom</h2>
            </v-col>
            <v-col cols="2" class="px-3">
              <v-text-field
                class="pt-1"
                type="number"
                step="any"
                min="0"
                ref="str"
                :rules="[statRules]"
                v-model.number="characterStats.cha"
              ></v-text-field>
              <h2 class="text-subtitle-1">Charisma</h2>
            </v-col>
          </v-row>
          <h2 class="font-italic text-h4 pa-2 ma-2">Final Scores</h2>
          <v-row>
            <v-container>
              <v-row class="pt-1" no-gutters>
                <v-col cols="2" class="px-3">
                  <v-img height="100px" width="150px" :src="d20logo.sample">
                    <h4 class="pt-11">
                      {{ totalStats.str }}
                    </h4></v-img
                  >
                  <h2 class="text-subtitle-1">Strength</h2>
                </v-col>
                <v-col cols="2" class="px-3">
                  <v-img height="100px" width="150px" :src="d20logo.sample">
                    <h4 class="pt-11">
                      {{ totalStats.dex }}
                    </h4></v-img
                  >
                  <h2 class="text-subtitle-1">Dexterity</h2>
                </v-col>
                <v-col cols="2" class="px-3">
                  <v-img height="100px" width="150px" :src="d20logo.sample">
                    <h4 class="pt-11">
                      {{ totalStats.con }}
                    </h4></v-img
                  >
                  <h2 class="text-subtitle-1">Constitution</h2>
                </v-col>
                <v-col cols="2" class="px-3">
                  <v-img height="100px" width="150px" :src="d20logo.sample">
                    <h4 class="pt-11">
                      {{ totalStats.int }}
                    </h4></v-img
                  >
                  <h2 class="text-subtitle-1">Intelligence</h2>
                </v-col>
                <v-col cols="2" class="px-3">
                  <v-img height="100px" width="150px" :src="d20logo.sample">
                    <h4 class="pt-11">
                      {{ totalStats.wis }}
                    </h4></v-img
                  >
                  <h2 class="text-subtitle-1">Wisdom</h2>
                </v-col>
                <v-col cols="2" class="px-3">
                  <v-img height="100px" width="150px" :src="d20logo.sample">
                    <h4 class="pt-11">
                      {{ totalStats.cha }}
                    </h4></v-img
                  >
                  <h2 class="text-subtitle-1">Charisma</h2>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-container>
    </div>
    <div class="">
      <v-btn variant="flat" color="secondary" @click="buildCharacter"
        >Build Character</v-btn
      >
    </div>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export default {
  data() {
    return {
      subClassDetails: {},
      classDetails: {},
      testImage: null,
      toolProficiencies: [],
      instrumentsProficiencies: [],
      newProficiencies: [],
      raceBonusStats: {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0,
      },
      newLanguage: '',
      d20logo: {
        sample: require('../assets/d20.png'),
      },
      statRules: (val) => {
        if (val > 17) return 'You cant pass 17 in normal rules';
        return true;
      },
      characterStats: {
        str: 8,
        dex: 8,
        con: 8,
        wis: 8,
        int: 8,
        cha: 8,
      },
      bonusStats: {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0,
      },
      classes: [],
      selectedClass: { index: 'select', name: 'Pick one' },
      subclasses: [],
      selectedSubclass: { index: 'select', name: 'No subclass' },
      selectedClassDetail: {},
      characterName: '',
      races: [],
      selectedRace: { index: 'select', name: 'Pick one' },
      selectedRaceDetails: {},
      subraces: [{ index: 'select', name: 'No subrace' }],
      selectedSubrace: { index: 'select', name: 'No subrace' },
      gender: '',
      backgrounds: [],
      selectedBackground: { index: 'select', name: 'No background' },
      personality: [],
      personalityTrait1: '',
      personalityTrait2: '',
      ideal: '',
      bond: '',
      flaw: '',
      characterImage: '',
      readers: [],
    };
  },
  computed: {
    totalStats() {
      let str = this.characterStats.str;
      let dex = this.characterStats.dex;
      let con = this.characterStats.con;
      let wis = this.characterStats.wis;
      let int = this.characterStats.int;
      let cha = this.characterStats.cha;
      return {
        str: (str += this.raceBonusStats.str),
        dex: (dex += this.raceBonusStats.dex),
        con: (con += this.raceBonusStats.con),
        wis: (wis += this.raceBonusStats.wis),
        int: (int += this.raceBonusStats.int),
        cha: (cha += this.raceBonusStats.cha),
      };
    },
  },
  watch: {
    selectedClass() {
      this.fetchSubclasses();
      this.initalizeClass();
    },
    selectedRace() {
      // this.nameGenerator();
      this.fetchRaceDetails();
      this.fetchSubraces();
    },
  },
  methods: {
    async buildCharacter() {
      this.setPersonality();
      let proficiencies = this.selectedClassDetail.proficiencies;
      let languages = this.selectedRaceDetails.languages;

      if (this.characterName === '') {
        this.characterName = 'No Name';
      }
      if (this.selectedSubclass.name === 'No subclass') {
        this.selectedSubclass.name === '';
      }
      if (this.newLanguage) {
        languages.push({
          index: this.newLanguage.item.index,
          name: this.newLanguage.item.name,
          url: this.newLanguage.item.url,
        });
      }

      let subrace;
      if (this.selectedSubrace.name === 'No subrace') {
        subrace = this.selectedRace;
      } else {
        subrace = this.selectedSubrace;
      }

      if (this.characterImage === '') {
        this.characterImage =
          'https://firebasestorage.googleapis.com/v0/b/dnd-vue.appspot.com/o/images%2FCOPIUM.png?alt=media&token=6563cb60-7e86-404c-8438-0acadf0afb5e';
      }

      let levels2 = [];
      let levelIndex = 1;
      while (levelIndex <= 20) {
        levels2.push({ class: this.selectedClass, level: levelIndex });
        levelIndex++;
      }

      const newCharacter = {
        id: this.characterName,
        levels: [...levels2],
        spells: [],
        name: this.characterName,
        image: this.characterImage,
        race: this.selectedRace,
        subrace: subrace,
        class: this.selectedClass,
        subclass: this.selectedSubclass,
        gender: this.gender,
        background: this.selectedBackground,
        personality: [...this.personality],
        stats: {
          str: this.totalStats.str,
          dex: this.totalStats.dex,
          con: this.totalStats.con,
          wis: this.totalStats.wis,
          int: this.totalStats.int,
          cha: this.totalStats.cha,
        },
        languages: [...languages],
        proficiencies: [...proficiencies],
        skillProficiencies: [...this.newProficiencies],
        instruments: [...this.instrumentsProficiencies],
      };
      console.log(newCharacter);
      this.$store.dispatch('character/addCharacter', newCharacter);
      this.$router.replace({ path: `/all-characters` });
    },
    async fetchRaceDetails() {
      const response = await fetch(
        `https://www.dnd5eapi.co${this.selectedRace.url}`
      );
      const responseData = await response.json();
      this.selectedRaceDetails = responseData;
      console.log(this.selectedRaceDetails);
      this.characterStats = {
        str: 8,
        dex: 8,
        con: 8,
        wis: 8,
        int: 8,
        cha: 8,
      };
      this.bonusStats = {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0,
      };
      for (const item of this.selectedRaceDetails.ability_bonuses) {
        this.bonusStats[item.ability_score.index] += item.bonus;
        this.characterStats[item.ability_score.index] += item.bonus;
      }
    },
    setPersonality() {
      if (!this.personalityTrait1) {
        this.personalityTrait1 = 'not selected';
      }
      if (!this.personalityTrait2) {
        this.personalityTrait2 = 'not selected';
      }
      if (!this.ideal) {
        this.ideal = 'not selected';
      }
      if (!this.bond) {
        this.bond = 'not selected';
      }
      if (!this.flaw) {
        this.flaw = 'not selected';
      }
      this.personality[0] = 'Personality Trait 1: ' + this.personalityTrait1;
      this.personality[1] = 'Personality Trait 2: ' + this.personalityTrait2;
      this.personality[2] = 'Ideal: ' + this.ideal;
      this.personality[3] = 'Bond: ' + this.bond;
      this.personality[4] = 'Flaw: ' + this.flaw;
    },
    async addImage(e) {
      const testImage2 = e.target.files[0];
      const storage = getStorage();
      const storageRef = ref(storage, `images/${testImage2.name}`);
      uploadBytes(storageRef, testImage2)
        .then((snapshot) => {
          console.log('Uploaded a blob or file!');
        })
        .then(() => {
          getDownloadURL(ref(storage, `images/${testImage2.name}`)).then(
            (url) => {
              console.log(url);
              this.characterImage = url;
            }
          );
        });
    },
    async fetchSubraces() {
      const response = await fetch(
        `https://www.dnd5eapi.co${this.selectedRace.url}/subraces`
      );
      const responseData = await response.json();
      if (responseData.results.length >= 1) {
        this.subraces = responseData;
      } else {
        this.subraces = [];
        this.selectedSubrace = { index: 'select', name: 'No subrace' };
      }
    },
    async fetchSubclasses() {
      this.subclasses = [];
      this.selectedSubclass = { index: 'select', name: 'No subclass' };
      let response = await fetch(
        `https://www.dnd5eapi.co${this.selectedClass.url}/subclasses`
      );
      let responseData = await response.json();
      if (responseData.results.length >= 1) {
        this.subclasses = responseData;
      } else {
        this.subclasses = [];
        this.selectedSubclass = { index: 'select', name: 'No subclass' };
      }
      response = await fetch(
        `https://www.dnd5eapi.co${responseData.results[0].url}/levels/1`
      );
      responseData = await response.json();
      if (!responseData.error) {
        this.subClassDetails = responseData;
        console.log(this.subClassDetails);
      } else {
        this.subclasses = [];
        this.selectedSubclass = { index: 'select', name: 'No subclass' };
      }
    },
    async initalizeClass() {
      let response = await fetch(
        `https://www.dnd5eapi.co${this.selectedClass.url}`
      );
      let responseData = await response.json();
      this.selectedClassDetail = responseData;
      this.newProficiencies = [];
      this.instrumentsProficiencies = [];
      response = await fetch(
        `https://www.dnd5eapi.co${this.selectedClass.url}/levels/1`
      );
      responseData = await response.json();
      this.classDetails = responseData;
    },
    async load() {
      await this.$store.dispatch('information/loadRaces');
      this.races = this.$store.getters['information/races'];

      await this.$store.dispatch('information/loadClasses');
      this.classes = this.$store.getters['information/classes'];

      await this.$store.dispatch('information/loadBackgrounds');
      this.backgrounds = this.$store.getters['information/backgrounds'];
    },
  },
  created() {
    this.load();
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  border: 5px solid rgb(63, 8, 99);
  padding: 10px;
  text-align: center;
}
</style>

import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      characters: [
        {
          id: 'test',
          levels: [
            {
              class: {
                index: 'barbarian',
                name: 'Barbarian',
                url: '/api/classes/barbarian',
              },
              level: 1,
            },
          ],
          name: 'test',
          image:
            '',
          race: {
            index: 'dragonborn',
            name: 'Dragonborn',
            url: '/api/races/dragonborn',
          },
          subrace: {
            index: 'hill-dwarf',
            name: 'Hill Dwarf',
            url: '/api/races/dragonborn',
          },
          class: {
            index: 'barbarian',
            name: 'Barbarian',
            url: '/api/classes/barbarian',
          },
          subclass: {
            index: 'berserker',
            name: 'Berserker',
            url: '/api/subclasses/berserker',
          },
          gender: 'Male',
          background: {
            index: 'acolyte',
            name: 'Acolyte',
            url: '/api/backgrounds/acolyte',
          },
          personality: [
            'Personality Trait 1: not selected',
            'Personality Trait 2: not selected',
            'Ideal: not selected',
            'Bond: not selected',
            'Flaw: not selected',
          ],
          stats: {
            str: 10,
            dex: 8,
            con: 8,
            wis: 8,
            int: 8,
            cha: 9,
          },
          languages: [
            {
              index: 'common',
              name: 'Common',
              url: '/api/languages/common',
            },
            {
              index: 'draconic',
              name: 'Draconic',
              url: '/api/languages/draconic',
            },
          ],
          proficiencies: [
            {
              index: 'light-armor',
              name: 'Light Armor',
              url: '/api/proficiencies/light-armor',
            },
            {
              index: 'medium-armor',
              name: 'Medium Armor',
              url: '/api/proficiencies/medium-armor',
            },
            {
              index: 'shields',
              name: 'Shields',
              url: '/api/proficiencies/shields',
            },
            {
              index: 'simple-weapons',
              name: 'Simple Weapons',
              url: '/api/proficiencies/simple-weapons',
            },
            {
              index: 'martial-weapons',
              name: 'Martial Weapons',
              url: '/api/proficiencies/martial-weapons',
            },
            {
              index: 'saving-throw-str',
              name: 'Saving Throw: STR',
              url: '/api/proficiencies/saving-throw-str',
            },
            {
              index: 'saving-throw-con',
              name: 'Saving Throw: CON',
              url: '/api/proficiencies/saving-throw-con',
            },
          ],
          skillProficiencies: [
            {
              option_type: 'reference',
              item: {
                index: 'skill-survival',
                name: 'Skill: Survival',
                url: '/api/proficiencies/skill-survival',
              },
            },
            {
              option_type: 'reference',
              item: {
                index: 'skill-perception',
                name: 'Skill: Perception',
                url: '/api/proficiencies/skill-perception',
              },
            },
          ],
          instruments: [],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

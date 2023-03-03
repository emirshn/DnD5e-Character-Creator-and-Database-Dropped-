export default {
  async addCharacter(context, data) {
    const characterData = {
      id: data.id,
      levels: data.levels,
      name: data.name,
      image: data.image,
      race: data.race,
      subrace: data.subrace,
      charclass: data.class,
      subclass: data.subclass,
      gender: data.gender,
      background: data.background,
      personality: data.personality,
      stats: data.stats,
      languages: data.languages,
      proficiencies: data.proficiencies,
      skillProficiencies: data.skillProficiencies,
      instruments: data.instruments,
      spells: data.spells,
    };

    const current = new Date();
    const response = await fetch(
      `${current.getSeconds() + data.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(characterData),
      }
    );

    if (!response.ok) {
      // error...
    }

    context.commit('addCharacter', {
      ...characterData,
    });
  },

  async loadCharacters(context) {
    const response = await fetch(
      `/characters.json`,
    );
    const responseData = await response.json();

    const characters = [];
    for (const key in responseData) {
      const character = {
        id: responseData[key].id,
        levels: responseData[key].levels,
        name: responseData[key].name,
        image: responseData[key].image,
        race: responseData[key].race,
        subrace: responseData[key].subrace,
        charclass: responseData[key].charclass,
        subclass: responseData[key].subclass,
        gender: responseData[key].gender,
        background: responseData[key].background,
        personality: responseData[key].personality,
        stats: responseData[key].stats,
        languages: responseData[key].languages,
        proficiencies: responseData[key].proficiencies,
        skillProficiencies: responseData[key].skillProficiencies,
        instruments: responseData[key].instruments,
        spells: responseData[key].spells,
      };
      characters.push(character);
    }
    context.commit('setCharacters', characters);
  },
};

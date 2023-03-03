export default {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    addCharacter(state, payload){
      state.characters.push(payload);
    }
  };
  
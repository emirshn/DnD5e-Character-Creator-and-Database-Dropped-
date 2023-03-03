export default {
  async loadRaces(context) {
    let response = await fetch('https://www.dnd5eapi.co/api/races');
    let responseData = await response.json();
    context.commit('setRaces', responseData);
  },

  async loadClasses(context) {
    let response = await fetch('https://www.dnd5eapi.co/api/classes');
    let responseData = await response.json();
    context.commit('setClasses', responseData);
  },

  async loadBackgrounds(context){
    let response = await fetch('https://www.dnd5eapi.co/api/backgrounds');
    let responseData = await response.json();
    context.commit('setBackgrounds', responseData);
  }
};

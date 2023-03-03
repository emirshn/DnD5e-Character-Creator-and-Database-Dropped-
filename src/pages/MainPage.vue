<template>
  <div>
    <v-btn variant="flat" color="secondary" @click="load">test</v-btn>
  </div>
  <div>
    <v-list lines="one">
      <v-list-item v-for="job in classes.results" :key="job.index">
        <v-btn @click="takeClass(job.name)" variant="flat" color="error">
          {{ job.name }}
        </v-btn>
      </v-list-item>
    </v-list>
  </div>
  <div v-if="selectedClass">
    <v-list lines="one">
      <v-list-item :title="selectedClass.name"> </v-list-item>
      <v-list-item :title="selectedClass.hit_die"> </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [],
      selectedClass: '',
    };
  },
  methods: {
    async load() {
      const response = await fetch('https://www.dnd5eapi.co/api/classes');
      const responseData = await response.json();
      console.log(responseData);
      this.classes = responseData;
    },
    async takeClass(event) {
      console.log(event);
      const response = await fetch(
        `https://www.dnd5eapi.co/api/classes/${event.toLowerCase()}`
      );
      const responseData = await response.json();
      console.log(responseData);
      this.selectedClass = responseData;
    },
  },
};
</script>

<template>
  
  <v-card color="#952175" theme="dark" max-width="350" max-height="350">
    <div class="d-flex flex-no-wrap">
      <div>
        <v-card-title class="text-h5"> {{ name }} </v-card-title>
        <v-card-subtitle
          >{{ gender }} {{ background.name }} {{ subrace.name }}
        </v-card-subtitle>
        <v-card-subtitle> {{ subclass.name }} </v-card-subtitle>
      </div>
      <v-avatar class="ma-3 ml-6" size="125" rounded="1">
        <v-img :src="image"></v-img>
      </v-avatar>
    </div>
    <v-divider></v-divider>
    <div class="pb-2 d-flex flex-row">
      <div>
        <v-card-subtitle class="text-h7"> STR </v-card-subtitle>
        <v-card-subtitle class="text-h7">
          {{ stats.str }}
        </v-card-subtitle>
      </div>
      <div>
        <v-card-subtitle class="text-h7"> DEX </v-card-subtitle>
        <v-card-subtitle class="text-h7">
          {{ stats.dex }}
        </v-card-subtitle>
      </div>
      <div>
        <v-card-subtitle class="text-h7"> CON </v-card-subtitle>
        <v-card-subtitle class="text-h7">
          {{ stats.con }}
        </v-card-subtitle>
      </div>
      <div>
        <v-card-subtitle class="text-h7"> INT </v-card-subtitle>
        <v-card-subtitle class="text-h7">
          {{ stats.int }}
        </v-card-subtitle>
      </div>
      <div>
        <v-card-subtitle class="text-h7"> WIS </v-card-subtitle>
        <v-card-subtitle class="text-h7">
          {{ stats.wis }}
        </v-card-subtitle>
      </div>
      <div>
        <v-card-subtitle class="text-h7"> CHA </v-card-subtitle>
        <v-card-subtitle class="text-h7">
          {{ stats.cha }}
        </v-card-subtitle>
      </div>
    </div>
    <v-divider></v-divider>
    <v-card-actions class="pb-1">
      <v-col class="text-right">
        <v-btn :to="detailsLink" class="pb-15">More</v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    'id',
    'name',
    'race',
    'subrace',
    'charclass',
    'subclass',
    'image',
    'gender',
    'background',
    'personality',
    'stats',
  ],
  computed: {
    detailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}
.image-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

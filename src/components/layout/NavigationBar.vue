<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        color="#952175"
        theme="dark"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://i.pinimg.com/originals/93/68/ae/9368aec5fa1cb5aa00daaa07fd3b76b4.jpg"
          title="Navigation"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            to="/character-creation"
            prepend-icon="mdi-sword"
            title="Character Creation"
            value="create"
          ></v-list-item>
          <v-list-item
            to="/all-characters"
            prepend-icon="mdi-account"
            title="My Characters"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-book"
            title="Game Rules"
            value="rule"
          ></v-list-item>
          <v-list-item
            to="/bestiary"
            prepend-icon="mdi-wizard-hat "
            title="Bestiary"
            value="bestiary"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-auto-fix"
            title="Spells"
            value="login"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-main style="height: 250px"></v-main> -->
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      rail: true,
    };
  },
};
</script>

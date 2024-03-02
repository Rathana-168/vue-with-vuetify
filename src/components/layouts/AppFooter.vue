<template>
  <v-footer app="true">
    <v-row justify="center" no-gutters>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>My First Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<script setup></script>

<style lang="scss" scoped></style>

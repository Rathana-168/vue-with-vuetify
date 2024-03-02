<template>
  <v-card>
    <v-layout>
      <!-- Left side menu -->
      <v-navigation-drawer
        v-model="drawer"
        :rail="appStore.leftSideOpen"
        permanent
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          height="63px"
          lines="three"
        >
          <div v-if="!appStore.leftSideOpen">
            <h3>Rathana Nop</h3>
            <small>Developer of Company</small>
          </div>
        </v-list-item>

        <v-list density="compact" nav>
          <v-list-item
            :to="{ name: 'home' }"
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="User"
            value="account"
            :to="{ name: 'user' }"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="About"
            value="users"
            :to="{ name: 'about' }"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- App Bar -->
      <v-app-bar color="blue-darken-4">
        <template v-slot:prepend>
          <v-app-bar-nav-icon
            @click.stop="appStore.leftSideOpen = !appStore.leftSideOpen"
          ></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title></v-app-bar-title>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <slot></slot>
    </v-layout>
  </v-card>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const drawer = true;
</script>

<style lang="scss" scoped></style>

<template>
  <app-header>
    <v-main>
      <div class="justify-center align-center h-100">
        <slot></slot>
      </div>
    </v-main>
    <app-footer></app-footer>
  </app-header>
</template>

<script setup>
import AppHeader from "@/components/layouts/AppHeader.vue";
import AppFooter from "@/components/layouts/AppFooter.vue";
</script>

<style lang="scss" scoped></style>

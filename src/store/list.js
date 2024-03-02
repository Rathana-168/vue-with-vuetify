// Utilities
import { defineStore } from "pinia";

export const useListStore = defineStore("list", {
  state: () => ({
    list_size: 20,
  }),
});

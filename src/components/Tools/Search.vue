<template>
  <q-input outlined class="col" v-model="SearchField" label="Search">
    <template v-slot:append>
      <q-icon
        v-if="SearchField !== ''"
        name="close"
        @click="SearchField = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("tasks", ["search"]),
    SearchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSearch"])
  }
};
</script>

<style></style>

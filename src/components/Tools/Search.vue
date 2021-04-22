<template>
  <q-input
    outlined
    class="col"
    @keyup.esc="SearchField = ''"
    v-model="SearchField"
    v-select-all
    label="Search"
  >
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
import { selectAll } from "src/directives/directive-select-all";
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
  },
  directives: {
    selectAll
  }
};
</script>

<style></style>

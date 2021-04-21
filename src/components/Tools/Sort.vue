<template>
  <q-select
    filled
    emit-value
    map-options
    v-model="sortby"
    class="col q-ml-sm"
    :options="options"
    label="Sort By"
    stack-label
    @input="sortOut"
  />
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      sortby: null,
      options: [
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Date",
          value: "dueDate"
        }
      ]
    };
  },
  methods: {
    ...mapActions("tasks", ["updateSort"]),
    sortOut() { 
      this.updateSort(this.sortby);
    }
  }
};
</script>

<style>
.q-select {
  flex: 0 0 20%;
}
</style>

<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      autofocus
      :value="name"
      v-select-all
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      label="Task name"
      ref="name"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name', '')"
          name="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";

export default {
  props: ["name"],
  directives: {
    selectAll
  }
};
</script>

<style></style>

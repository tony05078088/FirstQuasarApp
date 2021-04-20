<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      autofocus
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      label="Task name"
      ref="name"
      class="col"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name','')"
          name="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style></style>

<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due date"
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon
          v-if="dueDate"
          @click="clearDueDate"
          name="close"
          class="cursor-pointer"
        />

        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date 
            :value="dueDate" 
            @input="$emit('update:dueDate', $event)"
             />
            <div class=" row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueDate"],
  methods: {
    clearDueDate() {
      this.$emit("noDueDate");
    }
  }
};
</script>

<style></style>

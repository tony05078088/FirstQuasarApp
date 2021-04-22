<template>
<transition
  appear
  enter-active-class="animated slideInUp"
  leave-active-class="animated slideInDown"
>
  <q-banner dense class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="task" color="primary" />
    </template>
    You have completed all tasks now.
    <template v-slot:action>
      <q-btn
      @click="$root.$emit('showAddTask')"
      flat 
      color="primary" 
      label="Add TASK" />
    </template>
  </q-banner>
</transition>
</template>

<script>
export default {};
</script>

<style></style>

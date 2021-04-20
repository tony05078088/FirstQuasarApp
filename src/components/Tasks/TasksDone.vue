<template>
  <div class="q-mt-sm">
      <list-header
      bgColor="bg-light-green-3"
      >Completed</list-header>
    <q-list separator bordered>
      <task
        v-for="(task, key) in tasksDone"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksDone"],
  components: {
    task: require("../Tasks/Task").default,
    'listHeader': require("../Shared/ListHeader").default    
  }
};
</script>

<style></style>

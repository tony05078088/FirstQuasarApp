<template>
  <q-page class="q-pa-md">
    <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />
    <tasks-none v-else></tasks-none>
    <tasks-done :tasksDone="tasksDone" v-if="Object.keys(tasksDone).length" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="secondary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    };
  },
  components: {
    "add-task": require("../components/Modals/AddTask").default,
    "tasks-todo": require("components/Tasks/TasksTodo").default,
    "tasks-done": require("components/Tasks/TasksDone").default,
    "tasks-none": require("components/Tasks/NoTask").default
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksDone"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style scoped></style>

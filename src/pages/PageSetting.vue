<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search />
      <sort />
    </div>
    <p
      v-if="
        search &&
          !Object.keys(tasksTodo).length &&
          !Object.keys(tasksDone).length
      "
    >
      No search results
    </p>
    <div class="relative-position">
      <tasks-none v-if="!Object.keys(tasksTodo).length && !search"></tasks-none>
      <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />
      <tasks-done :tasksDone="tasksDone" v-if="Object.keys(tasksDone).length" />
    </div>

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
import { mapGetters, mapState } from "vuex";
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
    "tasks-none": require("components/Tasks/NoTask").default,
    search: require("components/Tools/Search").default,
    sort: require("components/Tools/Sort").default
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksDone"]),
    ...mapState("tasks", ["search"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style scoped></style>

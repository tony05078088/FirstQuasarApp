<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md absolute full-width full-height column">
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
      <q-scroll-area class="q-scroll-area-tasks">
        <tasks-none
          v-if="
            !Object.keys(tasksTodo).length &&
              !search &&
              !settings.showTaskInOneList
          "
        ></tasks-none>
        <tasks-todo
          class="q-mb-xl"
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"
        />
        <tasks-done
          :tasksDone="tasksDone"
          v-if="Object.keys(tasksDone).length"
        />
      </q-scroll-area>

      <div class="absolute-bottom no-pointer-events text-center q-mb-lg">
        <q-btn
          @click="showAddTask = true"
          round
          class="all-pointer-events"
          color="secondary"
          size="24px"
          icon="add"
        />
      </div>
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
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  }
};
</script>

<style scoped>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>

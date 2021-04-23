<template>
  <transition
    appear
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideInDown"
  >
    <div :class="{ 'q-mt-lg': !settings.showTasksInOneList }">
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-light-green-3"
        >Completed</list-header
      >
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksDone"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasksDone"],
  components: {
    task: require("../Tasks/Task").default,
    listHeader: require("../Shared/ListHeader").default
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>

<style></style>

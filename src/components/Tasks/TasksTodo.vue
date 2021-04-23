<template>
  <transition
    appear
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideInDown"
    absolute-top
  >
    <div>
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-deep-orange-4"
        >You have tasks umcompleted following.</list-header
      >
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasksTodo"
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
  props: ["tasksTodo"],
  computed: {
    ...mapGetters("settings", ["settings"])
  },
  components: {
    task: require("../Tasks/Task").default,
    ListHeader: require("../Shared/ListHeader").default
  }
};
</script>

<style></style>

<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name 
        :name.sync="taskToSubmit.name"
        ref="modalTaskName"></modal-task-name>

        <modal-due-date
        :dueDate.sync="taskToSubmit.dueDate"
        @noDueDate="clearDueDate"
        ></modal-due-date>
       <modal-due-time
       v-if="taskToSubmit.dueDate"
       :dueTime.sync="taskToSubmit.dueTime"
       ></modal-due-time>
      </q-card-section>
     <modal-button></modal-button>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    "modal-header": require("components/Modals/Shared/ModalHeader.vue").default,
    ModalTaskName: require("components/Modals/Shared/ModalTaskName").default,
    ModalDueDate: require("components/Modals/Shared/ModalDueDate").default,
    ModalDueTime: require('components/Modals/Shared/ModalDueTime').default,
    ModalButton: require('components/Modals/Shared/ModalButton').default
  },
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (! this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  }
};
</script>

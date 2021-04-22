export default {
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },
  components: {
    "modal-header": require("components/Modals/Shared/ModalHeader.vue").default,
    ModalTaskName: require("components/Modals/Shared/ModalTaskName").default,
    ModalDueDate: require("components/Modals/Shared/ModalDueDate").default,
    ModalDueTime: require("components/Modals/Shared/ModalDueTime").default,
    ModalButton: require("components/Modals/Shared/ModalButton").default
  }
};

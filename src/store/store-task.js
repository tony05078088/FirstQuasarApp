import { uid } from "quasar";
import Vue from "vue";
const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2021/04/16",
      dueTime: "09:30"
    },
    ID2: {
      name: "Get Apples",
      completed: false,
      dueDate: "2021/04/17",
      dueTime: "11:30"
    },
    ID3: {
      name: "Get bananas",
      completed: false,
      dueDate: "2021/04/18",
      dueTime: "12:30"
    }
  }
};

const mutations = {
  updateTask(state, payload) {
      Object.assign(state.tasks[payload.id],payload.updates)
  },
  deleteTask(state, id) {
      console.log(id)
    Vue.delete(state.tasks, id);
  },
  addTask(state,payload) {
      Vue.set(state.tasks,payload.id,payload.task)
  }
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    console.log(payload)
    commit("addTask", payload);
  }
};

const getters = {
  tasks(state) {
    return state.tasks;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

import { uid } from "quasar";
import Vue from "vue";
const state = {
  tasks: {
    ID1: {
      name: "Go to Shop",
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
      name: "Get Bananas",
      completed: false,
      dueDate: "2021/04/18",
      dueTime: "12:30"
    }
  },
  search: "",
  sort: "dueDate"
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
  setSearch(state, value) {
    state.search = value;
  },
  updateSort(state, value) {
    state.sort = value;
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
    commit("addTask", payload);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  updateSort({ commit }, value) {
    commit("updateSort", value);
  }
};

const getters = {
  tasksSorted(state) {
    let tasksSorted = {};
    let keysOrdered = Object.keys(state.tasks);

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase();

      if (taskAProp > taskBProp) return 1;
      else if (taskAProp < taskBProp) return -1;
      else return 0;
    });

    keysOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key];
    });
    console.log(tasksSorted);
    return tasksSorted;
  },
  tasksTodo(state, getters) {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksDone(state, getters) {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksFiltered(state, getters) {
    let tasksSorted = getters.tasksSorted;
    let tasksFiltered = {};
    if (state.search) {
      //populate the empty object
      Object.keys(tasksSorted).forEach(key => {
        let task = tasksSorted[key];
        let SearchLowerCase;
        let taskNameLowerCase;
        taskNameLowerCase = task.name.toLowerCase();
        SearchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(SearchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksSorted;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

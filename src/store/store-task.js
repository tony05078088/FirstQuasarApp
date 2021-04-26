import { uid } from "quasar";
import Vue from "vue";
import { firebaseAuth, firebaseDb } from "../boot/firebase";
const state = {
  tasks: {},
  search: "",
  sort: "dueDate",
  tasksDownloaded: false
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
  clearTasks(state) {
    state.tasks = {};
  },
  setSearch(state, value) {
    state.search = value;
  },
  updateSort(state, value) {
    state.sort = value;
  },
  setTasksDownoladed(state, value) {
    state.tasksDownloaded = value;
  }
};

const actions = {
  updateTask({ dispatch }, payload) {
    // commit("updateTask", payload);
    dispatch("FirebaseUpdateTask", payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch("FirebaseDeleteTask", id);
  },
  addTask({ dispatch }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    dispatch("FireBaseAddTask", payload);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  updateSort({ commit }, value) {
    commit("updateSort", value);
  },
  firebaseData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userTasks = firebaseDb.ref(`tasks/${userId}`);
    console.log(userTasks);

    userTasks.once("value", () => {
      commit("setTasksDownoladed", true);
    });

    // child added
    userTasks.on("child_added", snapshot => {
      // console.log(snapshot);
      let task = snapshot.val();
      console.log(task);
      let payload = {
        id: snapshot.key,
        task: task
      };
      commit("addTask", payload);
    });
    // child changed
    userTasks.on("child_changed", snapshot => {
      // console.log(snapshot);
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task
      };
      commit("updateTask", payload);
    });
    // child remove
    userTasks.on("child_removed", snapshot => {
      // console.log(snapshot);
      let taskId = snapshot.key;
      commit("deleteTask", taskId);
    });
  },
  FireBaseAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`);
    // console.log(payload);
    // console.log(taskRef);
    taskRef.set(payload.task);
  },
  FirebaseUpdateTask({}, payload) {
    console.log(payload);
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`);
    taskRef.update(payload.updates);
  },
  FirebaseDeleteTask({}, id) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref(`tasks/${userId}/${id}`);
    taskRef.remove();
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

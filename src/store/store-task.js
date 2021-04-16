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

const mutations = {};

const actions = {};

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

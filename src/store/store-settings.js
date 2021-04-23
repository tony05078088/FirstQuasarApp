import { SessionStorage } from "quasar";

const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: true
  }
};

const mutations = {
  setTimeFormat(state) {
    state.settings.show12HourTimeFormat = !state.settings.show12HourTimeFormat;
    console.log(JSON.parse(JSON.stringify(state.settings)));
    // console.log(state.settings);
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value;
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
    //console.log(state.settings);
  }
};

const actions = {
  setTimeFormat({ commit, dispatch }) {
    commit("setTimeFormat");
    dispatch("saveSettings");
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit("setShowTasksInOneList", value);
    dispatch("saveSettings");
  },
  saveSettings({ state }) {
    SessionStorage.set("settings", JSON.parse(JSON.stringify(state.settings)));
  },
  getSettings({ commit }) {
    let settings = SessionStorage.getItem("settings");
    if (settings) {
      commit("setSettings", settings);
    }
  }
};

const getters = {
  settings(state) {
    return state.settings;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

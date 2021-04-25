import { firebaseAuth } from "boot/firebase";
import { Loading, LocalStorage } from "quasar";
import { showErrorMessage } from "../functions/function-show-error-message";
const state = {
  loggedIn: false
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  }
};

const actions = {
  registerUser({}, payload) {
    Loading.show();
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        showErrorMessage(err.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          showErrorMessage(errorMessage);
        }
        console.log(error);
      });
  },
  logoutUser({}) {
    firebaseAuth
      .signOut()
      .then(res => {
        console.log(res);
        console.log("signout successfully");
      })
      .catch(err => {
        console.log(err);
        console.log("signout unsuccessfully");
      });
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        console.log("handle");
        // User is signed in.
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        this.$router.push("/");
        dispatch("tasks/firebaseData", null, { root: true });
      } else {
        commit("setLoggedIn", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/auth").catch(err => {
          console.log(err);
        });
      }
    });
  }
};

const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

// import something here
import { LocalStorage } from "quasar";
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default ({ router }) => {
  // something to do
  router.beforeEach((to, from, next) => {
    let logginStatus = LocalStorage.getItem("loggedIn");
    console.log(logginStatus);
    if (!logginStatus && to.path !== "/auth") {
      next("/auth");
    } else {
      next();
    }
  });
};

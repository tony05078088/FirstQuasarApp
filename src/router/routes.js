const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/todo", component: () => import("src/pages/PageTodo.vue") },
      { path: "/settings", component: () => import("pages/PageSetting.vue") },
      { path: "/settings/help", component: () => import("pages/PageHelp.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

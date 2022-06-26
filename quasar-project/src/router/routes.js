const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/dashboard", component: () => import("pages/dashboard.vue") },
      { path: "/register", component: () => import("pages/register.vue") },
      { path: "/table", component: () => import("pages/table.vue") },
      {
        path: "/createdemuc",
        component: () => import("pages/createdemuc.vue"),
      },
      { path: "/createbcs", component: () => import("pages/createbcs.vue") },
      { path: "/inputdata", component: () => import("pages/inputdata.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/login.vue"),
  },
];

export default routes;

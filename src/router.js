import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/list",
    name: "list",
    component: () => import("./components/ListForm")
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: () => import("./components/PayrollDataModal")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/PayrollVariableEmployeeForm")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
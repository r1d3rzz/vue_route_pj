import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobView from "../views/job/JobView.vue";
import JobDetail from "../views/job/JobDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/job",
    name: "Job",
    component: JobView,
  },
  {
    path: "/job/detail/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

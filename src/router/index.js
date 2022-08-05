import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndexView from "../views/MoviesIndexView.vue";
import MoviesNewView from "../views/MoviesNewView.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesEdit from "../views/MoviesEdit.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import SignupView from "../views/SignupView.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/movies", name: "movies-index", component: MoviesIndexView },
  { path: "/movies/new", name: "movies-new", component: MoviesNewView },
  { path: "/movies/:id", name: "movies-show", component: MoviesShow },
  { path: "/movies/:id/edit", name: "movies-edit", component: MoviesEdit },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/signup", name: "signup", component: SignupView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Profile from "../views/Profile/Profile.vue";
import Extra from "../views/Extra/Extra.vue";
import Tables from "../views/Tables/Tables.vue";
import Buttons from "../views/Buttons/Buttons.vue";
import Navbars from "../views/Navbars/Navbars.vue";
import Range from "../views/Stats/Stats.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/stats", name: "Range", component: Range },
    { path: "/about", name: "About", component: About },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/extra", name: "Extra", component: Extra },
    { path: '/tables', name: "Tables", component: Tables },
    { path: '/buttons', name: "Buttons", component: Buttons },
    { path: '/navbars', name: "Navbars", component: Navbars },
  ],
});

export default router;

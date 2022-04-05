import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Skis from "../components/menu_ski_brands.vue";
import Brand_boards from "../components/menu_boards_select.vue";
import Snowboards from '../components/menu_snowboard_brands.vue';
import Brand_trucks from '../components/menu_trucks_select.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Parts",
    component: Skis,
  },
  {
    path: "/:id",
    name: "Parts",
    component: Snowboards,
  },
  {
    path: "/skis",
    name: "Skis",
    component: Skis,
  },
  {
    path: "/boards/:id",
    name: "BoardBrand",
    component: Brand_boards,
  },
  {
    path: "/snowboards",
    name: "Snowboards",
    component: Snowboards,
  },
  {
    path: "/trucks/:id",
    name: "TruckBrand",
    component: Brand_trucks,
  },

  
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

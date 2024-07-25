import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import MarcaView from "../views/MarcaView.vue";
import CorView from "../views/CorView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/categorias",
          name: "categorias",
          component: CategoriaView,
        }, {
          path: "/acessorios",
          name: "acessorios",
          component: AcessorioView,
        },
        {
          path: "/marcas",
          name: "marcas",
          component: MarcaView,
        },
        {
          path: "/cores",
          name: "cores",
          component: CorView,
        },
        {
          path: "/login",
          name: "login",
          component: LoginView,
        },
      ],
    },
  ]
})

export default router

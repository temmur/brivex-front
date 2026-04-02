import { createRouter, createWebHistory } from "vue-router"

import PIndex from "@/views/PIndex.vue"
import PProducts from "@/views/PProducts.vue"
import LDefault from "../layouts/LDefault.vue"
import CPlayGround from "@/components/CPlayGround.vue"

const routes = [
    {
    path: "/",
    name: "Layout",
    component: LDefault,
    children: [
        {
            path: '/',
            name: 'Main',
            component: PIndex
        },
        {
          path: 'playground',
          name: "Playground",
          component: CPlayGround
        },
        {
          path: 'products',
          name: 'Products',
          component: PProducts
        }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: 'smooth',
      }
    }

    if (to.path !== from.path) {
      return {
        top: 0,
        left: 0,
      }
    }

    return {
      top: 0,
      left: 0,
    }
  }
})

export default router

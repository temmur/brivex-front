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
  routes
})

export default router

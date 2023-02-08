import { createRouter,createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import register from "@/pages/register.vue";
import reservation from "@/pages/reservation.vue";

const routes =[
    {
        path:'/',
        component:Home,
    },
    {
        path:'/register',
        component:register,
    },
    {
        path:'/reservation',
        component:reservation,
    }
]

const router = createRouter({
    routes : routes,
    history : createWebHistory()
})

export default router;
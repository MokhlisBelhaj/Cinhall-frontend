import { createRouter,createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Films from "@/pages/Films.vue";
import reservation from "@/pages/reservation.vue";

const routes =[
    {
        path:'/',
        component:Home,
    },
    {
        path:'/films',
        component:Films,
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
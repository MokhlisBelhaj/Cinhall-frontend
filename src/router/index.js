import { createRouter,createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import register from "@/pages/register.vue";
import reservation from "@/pages/reservation.vue";
import newRes from "@/pages/newRes.vue";
import test from "@/pages/test.vue";

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
    },
    {
        path:'/newRes',
        component:newRes,
    },
    {
        path:'/test',
        component:test,
    }

]

const router = createRouter({
    routes : routes,
    history : createWebHistory()
})

export default router;
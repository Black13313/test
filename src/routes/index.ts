import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes = [
    {
        name: "NotFoundPage",
        path: "/:pathMatch(.*)*",
        component: () => import("../Views/NotFoundPage.vue"),
        meta: {
            title: "Page not found",
        },
    },
    {
        name: "HomePage",
        path: "/",
        component: () => import("../Views/Home.vue"),
        meta: {
            title: "Home Page",
            requireAuth: true
        },
    },
    {
        name: "StockPage",
        path: "/stock",
        component: () => import("../Views/Stock/Stock.vue"),
        meta: {
            title: "Stock Page",
            requireAuth: true
        },
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;

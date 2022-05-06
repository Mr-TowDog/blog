import VueRouter from 'vue-router';
import Vue from "vue";
Vue.use(VueRouter)
const index = () =>
    import ("views/Index/index.vue");
const artice = () =>
    import ("views/Article/article.vue");
const label = () =>
    import ("views/Label/Label.vue");

const routes = [{
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: index
    }, {
        path: "/article/:id",
        component: artice
    },
    {
        path: "/label",
        component: label
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
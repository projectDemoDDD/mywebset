import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login.vue";
import MainPage from "../pages/MainPage.vue";
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login

        },
        {
            path: '/MainPage',
            name: 'MainPage',
            component: MainPage

        }
    ]
})
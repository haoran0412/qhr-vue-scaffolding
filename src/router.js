import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                login: true, // 标记该路由是登录路由
                anonymous: true // 可以匿名访问
            },
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                anonymous: true
            }
        }]
})

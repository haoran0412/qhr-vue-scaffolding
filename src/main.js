import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import UUID from 'vue-uuid';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import api from './api'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(UUID)
Vue.use(require('vue-moment'))
Vue.prototype.api = api

router.beforeEach(function (to, from, next) {
    if (to.meta.anonymous || localStorage.getItem('user')) {
        next()
    } else {
        next({name: 'login'});
    }
});

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')


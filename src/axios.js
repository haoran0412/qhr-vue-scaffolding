import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 全局 HTTP 请求设置
axios.interceptors.request.use(
    config => {
        let currentUser = JSON.parse(localStorage.getItem('user'))
        currentUser && (config.headers['X-API-Key'] = currentUser.api_key)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Vue.use(VueAxios, axios)

export default new VueAxios({

})

<template>
  <div id="app">
    <!-- TODO：判断用哪个布局改为是否登录，因为:
      1. 如果代码出错，会直接显示主界面布局;
      2. 在登录页刷新，会显示一下主界面 -->
    <!-- 登录界面 -->
    <div v-if="$route.meta.login" class="wrapper">
      <LoginLayout></LoginLayout>
    </div>

    <!-- 主界面 -->
    <div v-if="!$route.meta.login" class="wrapper">
      <MainLayout></MainLayout>
    </div>
  </div>
</template>

<script>
  import LoginLayout from './components/LoginLayout.vue'
  import MainLayout from './components/MainLayout.vue'

  export default {
    name: 'app',
    components: { LoginLayout, MainLayout }
  }
</script>

<style>
</style>
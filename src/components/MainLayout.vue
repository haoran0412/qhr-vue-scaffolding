<template>
    <!-- #545c64 -->
    <el-container>
        <el-aside>
            <el-menu
                background-color="#263544"
                text-color="#b7c0cd"
                active-text-color="#42a5f5"
                :default-active="this.$route.path" router>
                <el-menu-item class="text-center" style="height: 60px;border-bottom: 1px solid #1d2531">
                    <span style="font-size: 18px;color: #b7c0cd;">后台管理系统</span>
                </el-menu-item>
                <section v-for="(menu, i) in menus" :key="i">
                    <!-- 无子菜单 -->
                    <el-menu-item v-if="!menu.subMenus" :index="menu.path">
                        <i :class="menu.icon"></i>
                        <span slot="title">{{ menu.name }}</span>
                    </el-menu-item>
                    <!-- 有子菜单 -->
                    <el-submenu v-if="menu.subMenus" :index="menu.path">
                        <template slot="title">
                            <i :class="menu.icon"></i>
                            <span>{{ menu.name }}</span>
                        </template>
                        <el-menu-item v-for="(subMenu, j) in menu.subMenus" :key="j" :index="subMenu.path">{{
                            subMenu.name }}
                        </el-menu-item>
                    </el-submenu>
                </section>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <el-menu @select="accountSelect" mode="horizontal" router>
                    <el-submenu index="1">
                        <template slot="title">账户</template>
                        <el-menu-item index="/reset_password">修改密码</el-menu-item>
                        <el-menu-item index="logout">退出</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'MainLayout',
        data() {
            return {
                menus: [
                    {
                        path: '/',
                        icon: 'el-icon-house',
                        name: '首页',
                    },
                    {
                        path: '/a',
                        icon: 'el-icon-video-play',
                        name: '音频管理',
                    },
                    {
                        path: '/b',
                        icon: 'el-icon-video-camera',
                        name: '视频管理'
                    },
                    {
                        path: '/c',
                        icon: 'el-icon-collection',
                        name: '图书管理',
                    }
                ]
            }
        },
        methods: {
            accountSelect(key) {
                if (key === 'logout') {
                    this.logout()
                }
            },
            logout() {
                localStorage.removeItem('user')
                this.$router.go(0)
            }
        }
    }
</script>

<style>
</style>
